package lk.gov.ps.HPSDF.admin.ar.controllers;

import lk.gov.ps.HPSDF.admin.ar.models.ArchiveSubject;
import lk.gov.ps.HPSDF.admin.ar.services.ArchiveSubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth/ar")
public class ArchiveSubjectController {
    private ArchiveSubjectService archiveSubjectService;
    @Autowired
    public ArchiveSubjectController(ArchiveSubjectService archiveSubjectService) {
        this.archiveSubjectService = archiveSubjectService;
    }

    @GetMapping("/subjectsBySectionId/{sectionId}")
    public ResponseEntity<?> getSubjectsBySectionId(@PathVariable String sectionId){
        try{
            List<ArchiveSubject> subjects=archiveSubjectService.getSubjectsBySectionId(sectionId);
            return ResponseEntity.ok(subjects);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("error occured whe  retreiving data to the controller");
        }

    }


}
