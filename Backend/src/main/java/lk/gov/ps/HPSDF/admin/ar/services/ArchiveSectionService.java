package lk.gov.ps.HPSDF.admin.ar.services;

import lk.gov.ps.HPSDF.admin.ar.dto.ArchiveSectionDTO;
import lk.gov.ps.HPSDF.admin.ar.models.ArchiveSection;
import lk.gov.ps.HPSDF.admin.ar.repositories.ArchiveSectionRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class ArchiveSectionService {
    private ArchiveSectionRepository archiveSectionRepository;
    private ModelMapper modelMapper;

    @Autowired
    public ArchiveSectionService(ArchiveSectionRepository archiveSectionRepository,ModelMapper modelMapper) {
        this.archiveSectionRepository = archiveSectionRepository;
        this.modelMapper=modelMapper;
    }

    public List<ArchiveSection> getAllSectionsSubjects(){
        try{
            return archiveSectionRepository.findAll();
        }   catch (Exception e) {
        // Log the exception or handle it accordingly
            throw new RuntimeException("Error occurred while retrieving archive sections", e);
        }

    }
    public List<ArchiveSectionDTO> getAllSections(){
        try{
            List<ArchiveSection> sections=archiveSectionRepository.findAll();
            return sections.stream()
                    .map(section->modelMapper.map(section, ArchiveSectionDTO.class))
                    .collect(Collectors.toList());

        }   catch (Exception e) {
            // Log the exception or handle it accordingly
            throw new RuntimeException("Error occurred while retrieving archive sections", e);
        }

    }
    public ArchiveSectionDTO getSectionById(Long id){
        try{
            ArchiveSection section=archiveSectionRepository.findById(id).orElse(null);
            return modelMapper.map(section,ArchiveSectionDTO.class);
        }catch(Exception e){
            throw new RuntimeException("Error occurred while retrieving archive sections", e);
        }

    }
    public boolean saveArchiveSection(ArchiveSection archiveSection){
        Optional<ArchiveSection> optionalArchiveSection=archiveSectionRepository.findById(archiveSection.getId());

        if(optionalArchiveSection.isPresent()){
            return false;
        }else{
            archiveSectionRepository.save(archiveSection);
            return true;
        }
    }
    public boolean deleteArchiveSection(Long archiveSectionId) {
        boolean doesExists= archiveSectionRepository.existsById(archiveSectionId);
        if(!doesExists){
            return false;
        }else{
            archiveSectionRepository.deleteById(archiveSectionId);
            return true;
        }
    }
}
