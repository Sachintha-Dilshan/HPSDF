package lk.gov.ps.HPSDF.admin.ar.services;

import lk.gov.ps.HPSDF.admin.ar.models.ArchiveSection;
import lk.gov.ps.HPSDF.admin.ar.models.ArchiveSubject;
import lk.gov.ps.HPSDF.admin.ar.repositories.ArchiveSubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Optional;

@Component
public class ArchiveSubjectService {
    private ArchiveSubjectRepository archiveSubjectRepository;
    @Autowired
    public ArchiveSubjectService(ArchiveSubjectRepository archiveSubjectRepository) {
        this.archiveSubjectRepository = archiveSubjectRepository;
    }

    public List<ArchiveSubject> getSubjectsBySectionId(String sectionId){
        try{
            return archiveSubjectRepository.findByArchiveSectionId(sectionId);
        }catch(Exception e){
            throw new RuntimeException("Error occured while fetching subjects into services.",e);
        }

    }

    public ArchiveSubject getSubjectById(String id){
        return archiveSubjectRepository.findById(id).orElse(null);
    }
    public boolean saveArchiveSubject(ArchiveSubject archiveSubject){

        archiveSubjectRepository.save(archiveSubject);
        return true;

    }
    public boolean deleteArchiveSubject(String archiveSubjectId) {
        boolean doesExists= archiveSubjectRepository.existsById(archiveSubjectId);
        if(!doesExists){
            return false;
        }else{
            archiveSubjectRepository.deleteById(archiveSubjectId);
            return true;
        }
    }
}
