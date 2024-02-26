package lk.gov.ps.HPSDF.admin.ar.services;

import lk.gov.ps.HPSDF.admin.ar.models.ArchiveRack;
import lk.gov.ps.HPSDF.admin.ar.models.ArchiveSection;
import lk.gov.ps.HPSDF.admin.ar.repositories.ArchiveRackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Optional;

@Component
public class ArchiveRackService {
    private ArchiveRackRepository archiveRackRepository;

    @Autowired
    public ArchiveRackService(ArchiveRackRepository archiveRackRepository) {
        this.archiveRackRepository = archiveRackRepository;
    }


    public List<ArchiveRack> getAllRacks(){
        return archiveRackRepository.findAll();
    }
    public boolean saveArchiveRack(ArchiveRack archiveRack){
        Optional<ArchiveRack> existingArchiveRack=archiveRackRepository.findById(archiveRack.getId());

        if(existingArchiveRack.isPresent()){
            return false ;
        }else{
            archiveRackRepository.save(archiveRack);
            return true;
        }
    }
    public boolean deleteArchiveRack(Long archiveRackId) {
        boolean doesExists= archiveRackRepository.existsById(archiveRackId);
        if(!doesExists){
            return false;
        }else{
            archiveRackRepository.deleteById(archiveRackId);
            return true;
        }
    }
}
