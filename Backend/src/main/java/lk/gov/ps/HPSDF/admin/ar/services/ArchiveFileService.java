package lk.gov.ps.HPSDF.admin.ar.services;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lk.gov.ps.HPSDF.admin.ar.dto.ArchiveGetFileDTO;
import lk.gov.ps.HPSDF.admin.ar.dto.ArchiveSaveFileDTO;
import lk.gov.ps.HPSDF.admin.ar.models.ArchiveFile;
import lk.gov.ps.HPSDF.admin.ar.repositories.ArchiveFileRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class ArchiveFileService {
    private ArchiveFileRepository archiveFileRepository;
    private ModelMapper modelMapper;

    @Autowired
    public ArchiveFileService(ArchiveFileRepository archiveFileRepository, ModelMapper modelMapper) {
        this.archiveFileRepository = archiveFileRepository;
        this.modelMapper=modelMapper;
    }

    public List<ArchiveFile> getFiles(){
        return archiveFileRepository.findAll();
    }
    public ArchiveGetFileDTO getFile(Long fileId,Long sectionId){
        ArchiveGetFileDTO fileDTO;
        Optional<ArchiveFile> file= archiveFileRepository.findByIdAndArchiveSection_Id(fileId,sectionId);
        if(file.isPresent()){
             System.out.println(file.get());
             fileDTO=modelMapper.map(file.get(), ArchiveGetFileDTO.class);
             return fileDTO;
        }else{
            throw new RuntimeException("File with id "+fileId+" not available in this Section");
        }

    }
    public List<ArchiveFile> getRecentFiles(Long sectionId){
        Pageable pageable=  PageRequest.of(0,5, Sort.by("id").descending());
        return archiveFileRepository.findTop5ByOrderByIdDesc(sectionId,pageable);

    }

     public void saveArchiveFile(ArchiveSaveFileDTO fileDTO){

        Optional<ArchiveFile> archiveFile1=archiveFileRepository.findByFileNumber(fileDTO.getFileNumber());
        Optional<ArchiveFile> archiveFile2=archiveFileRepository.findByFileName(fileDTO.getFileName());
        if(archiveFile1.isPresent()){
            throw new RuntimeException("Already exist a file with FileNumber "+fileDTO.getFileNumber());
        }
        if(archiveFile2.isPresent()){
            throw new RuntimeException("Already exist a file with FileName "+fileDTO.getFileName());
        }
            ArchiveFile archiveFile=modelMapper.map(fileDTO,ArchiveFile.class);
            archiveFileRepository.save(archiveFile);
    }

    public void deleteArchiveFile(Long sectionId,Long archiveFileId) {
        Optional<ArchiveFile> file= archiveFileRepository.findByIdAndArchiveSection_Id(archiveFileId,sectionId);
        if(file.isPresent()){
            archiveFileRepository.deleteById(archiveFileId);
        }else{
            throw new EntityNotFoundException("File with the id "+archiveFileId+" is not available in this section");
        }

    }

    @Transactional
    public void updateArchiveFile(Long sectionId,Long archiveFileId,ArchiveSaveFileDTO fileDTO) {

        ArchiveFile existingFile=archiveFileRepository.findByIdAndArchiveSection_Id(archiveFileId,sectionId)
                .orElse(null);
        if(existingFile==null){
            throw new EntityNotFoundException("File with the id "+archiveFileId+ " is not available in this section");
        }else{
            Optional<ArchiveFile> archiveFile1=archiveFileRepository.findByFileNumber(fileDTO.getFileNumber());
            Optional<ArchiveFile> archiveFile2=archiveFileRepository.findByFileName(fileDTO.getFileName());
            if(archiveFile1.isPresent() && archiveFile1.isPresent() && existingFile.getId()!=archiveFile1.get().getId()){
                throw new DataIntegrityViolationException("Already exist a file with FileNumber "+fileDTO.getFileNumber());
            }
            if(archiveFile2.isPresent() && archiveFile2.isPresent() && existingFile.getId()!=archiveFile2.get().getId()){
                throw new DataIntegrityViolationException("Already exist a file with FileName "+fileDTO.getFileName());
            }
            // Copy non-null properties from updatedFile to existingFile
            ArchiveFile archiveFile=modelMapper.map(fileDTO,ArchiveFile.class);
            System.out.println(archiveFile);
            BeanUtils.copyProperties(archiveFile, existingFile, "id");
            // Save the updated file
            archiveFileRepository.save(existingFile);
        }
    }
}
