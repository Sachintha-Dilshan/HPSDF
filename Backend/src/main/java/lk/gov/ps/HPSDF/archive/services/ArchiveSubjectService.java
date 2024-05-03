package lk.gov.ps.HPSDF.archive.services;

import lk.gov.ps.HPSDF.archive.models.ArchiveSubject;
import lk.gov.ps.HPSDF.archive.repositories.ArchiveSubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Optional;

@Component
public class ArchiveSubjectService {
    @Autowired
    private ArchiveSubjectRepository archiveSubjectRepository;

    public ArchiveSubject saveArchiveSubject(ArchiveSubject subject){
        return archiveSubjectRepository.save(subject);
    }

    public List<ArchiveSubject> getAllArchiveSubjects(){
        return archiveSubjectRepository.findAll();
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
