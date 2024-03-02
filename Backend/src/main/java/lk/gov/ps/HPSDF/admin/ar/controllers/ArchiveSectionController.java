package lk.gov.ps.HPSDF.admin.ar.controllers;

import lk.gov.ps.HPSDF.admin.ar.dto.ArchiveSectionDTO;
import lk.gov.ps.HPSDF.admin.ar.models.ArchiveSection;
import lk.gov.ps.HPSDF.admin.ar.services.ArchiveSectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth/ar")
public class ArchiveSectionController {
    private ArchiveSectionService archiveSectionService;

    @Autowired
    public ArchiveSectionController(ArchiveSectionService archiveSectionService) {
        this.archiveSectionService = archiveSectionService;
    }

    @GetMapping("/sectionssubjects")
    public ResponseEntity<?> getSectionsSubjects() {
//        List<ArchiveSection>
        try{
            List<ArchiveSection> sections=archiveSectionService.getAllSectionsSubjects();
            return ResponseEntity.ok(sections);
        } catch (RuntimeException e) {
        // Log the exception or handle it accordingly
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred while retrieving archive sections");
        }
    }

    @GetMapping("/sections")
    public ResponseEntity<?> getSections() {
//        List<ArchiveSection>
        try{
            List<ArchiveSectionDTO> sections=archiveSectionService.getAllSections();
            return ResponseEntity.ok(sections);
        } catch (RuntimeException e) {
            // Log the exception or handle it accordingly
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred while retrieving archive sections");
        }
    }


    @GetMapping("/sectionById/{sectionId}")
    public ResponseEntity<?> getSection(@PathVariable String sectionId) {

        try{
            ArchiveSectionDTO section = archiveSectionService.getSectionById(sectionId);
            return ResponseEntity.ok(section);
        }
        catch(RuntimeException e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("NO ..Section with this id");
        }
//        if (section != null) {
//            return new ResponseEntity<>(section, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
//        }
    }

    @PostMapping("/section")
    public boolean saveArchiveSection(@RequestBody ArchiveSection section) {
        return archiveSectionService.saveArchiveSection(section);
    }

    @DeleteMapping(path = "{sectionId}")
    public boolean deleteArchiveSection(@PathVariable("sectionId") String sectionId) {
        return archiveSectionService.deleteArchiveSection(sectionId);
    }

}