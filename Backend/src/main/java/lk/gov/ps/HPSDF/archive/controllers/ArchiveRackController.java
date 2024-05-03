package lk.gov.ps.HPSDF.archive.controllers;

import lk.gov.ps.HPSDF.archive.models.ArchiveRack;
import lk.gov.ps.HPSDF.archive.services.ArchiveRackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth/ar")
public class ArchiveRackController {
    private ArchiveRackService archiveRackService;

    @Autowired
    public ArchiveRackController(ArchiveRackService archiveRackService) {
        this.archiveRackService = archiveRackService;
    }
    @GetMapping("/racks")
    public List<ArchiveRack> getAllRacks(){
       return archiveRackService.getAllRacks();
    }

}
