package lk.gov.ps.HPSDF.admin.ar.controllers;

import jakarta.persistence.EntityNotFoundException;
import lk.gov.ps.HPSDF.admin.ar.dto.ArchiveGetCheckedOutFileDTO;
import lk.gov.ps.HPSDF.admin.ar.dto.ArchiveGetFileDTO;
import lk.gov.ps.HPSDF.admin.ar.dto.ArchiveSaveFileDTO;
import lk.gov.ps.HPSDF.admin.ar.models.ArchiveFile;
import lk.gov.ps.HPSDF.admin.ar.services.ArchiveFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth/ar")
public class ArchiveFileController {
    private ArchiveFileService archiveFileService;

    @Autowired
    public ArchiveFileController(ArchiveFileService archiveFileService) {
        this.archiveFileService = archiveFileService;
    }


    @GetMapping("/files")
    public ResponseEntity<List<ArchiveFile>> getFiles(){
        return ResponseEntity.ok(archiveFileService.getFiles());
    }
    @GetMapping("/fileById/{sectionId}/{fileId}")
    public ResponseEntity<?> getFile(@PathVariable String sectionId, @PathVariable Long fileId){
        try{
            ArchiveGetFileDTO fileDTO=archiveFileService.getFile(fileId,sectionId);
            return ResponseEntity.ok(fileDTO);
        }catch(Exception ex){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }
    }

    @GetMapping("/recentFiles/{sectionId}")
    public ResponseEntity<List<ArchiveFile>> getRecentFiles(@PathVariable String sectionId){
        return ResponseEntity.ok(archiveFileService.getRecentFiles(sectionId));
    }
    @GetMapping("/checkedOutFiles")
    public ResponseEntity<List<ArchiveGetCheckedOutFileDTO>> getCheckedOutFiles(
            @RequestParam(required = false) String fileNumber,
            @RequestParam(required = false) String fileName,
            @RequestParam(required = false) String sectionName,
            @RequestParam(required = false) String subjectName,
            @RequestParam(required = false) String employeeNIC
    )
    {
        return ResponseEntity.ok(archiveFileService
                .getCheckedOutFiles(fileNumber,fileName,sectionName,subjectName,employeeNIC));

    }

    @GetMapping("/checkedOutFilesCount")
    public ResponseEntity<Integer> getFileCountsCheckedOut(){
        Integer count=archiveFileService.getFileCountsCheckedOut();
        return ResponseEntity.ok(count);
    }
    @PostMapping("/file")
    public ResponseEntity<String> saveArchiveFile(@RequestBody ArchiveSaveFileDTO fileDTO){
        try {

            archiveFileService.saveArchiveFile(fileDTO);
            return ResponseEntity.ok("File is successfully saved");
        }catch(Exception ex){
            System.out.println(ex.getMessage());
            return ResponseEntity.status(HttpStatus.CONFLICT).body(ex.getMessage());
        }
    }

    @DeleteMapping(path="file/{sectionId}/{fileId}")
    public ResponseEntity<String> deleteArchiveFile(@PathVariable("sectionId") String sectionId,
                                                    @PathVariable("fileId") Long fileId)
    {
        
        try{
            archiveFileService.deleteArchiveFile(sectionId,fileId);
            return ResponseEntity.ok("file Deleted successfully.");
        }catch(Exception ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }

    }
    @PutMapping("file/{sectionId}/{fileId}")
    public ResponseEntity<String> updateArchiveFile(@PathVariable("sectionId") String sectionId,
                                                    @PathVariable("fileId") Long fileId,
                                                    @RequestBody ArchiveSaveFileDTO fileDTO)
    {

        try{
            archiveFileService.updateArchiveFile(sectionId,fileId,fileDTO);
           return ResponseEntity.ok("File with file id "+fileId+"is succussfully updated..");
        }catch(EntityNotFoundException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }catch (DataIntegrityViolationException ex){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(ex.getMessage());
        }catch(Exception ex){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("internal server error");
        }

    }
    @PutMapping("checkInFile/{fileId}")
    public ResponseEntity<String> checkInArchiveFile(@PathVariable("fileId") Long fileId){
        archiveFileService.checkInArchiveFile(fileId);
        return ResponseEntity.ok("File has successfully Checked In");
    }
}
