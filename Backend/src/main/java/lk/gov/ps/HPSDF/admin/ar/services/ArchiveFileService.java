package lk.gov.ps.HPSDF.admin.ar.services;

import io.micrometer.common.lang.Nullable;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lk.gov.ps.HPSDF.admin.ar.dto.ArchiveGetCheckedOutFileDTO;
import lk.gov.ps.HPSDF.admin.ar.dto.ArchiveGetFileDTO;
import lk.gov.ps.HPSDF.admin.ar.dto.ArchiveGetSearchFileDTO;
import lk.gov.ps.HPSDF.admin.ar.dto.ArchiveSaveFileDTO;
import lk.gov.ps.HPSDF.admin.ar.models.ArchiveFile;
import lk.gov.ps.HPSDF.admin.ar.repositories.ArchiveFileRepository;
import lk.gov.ps.HPSDF.admin.hr.models.Employee;
import lk.gov.ps.HPSDF.admin.hr.repositories.EmployeeRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class ArchiveFileService {
    private ArchiveFileRepository archiveFileRepository;
    private EmployeeRepository employeeRepository;
    private ModelMapper modelMapper;

    @Autowired
    public ArchiveFileService(ArchiveFileRepository archiveFileRepository, ModelMapper modelMapper, EmployeeRepository employeeRepository) {
        this.archiveFileRepository = archiveFileRepository;
        this.employeeRepository=employeeRepository;
        this.modelMapper=modelMapper;
    }

    public List<ArchiveFile> getFiles(){
        return archiveFileRepository.findAll();
    }
    public ArchiveGetFileDTO getFile(Long fileId,String sectionId){
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
    public List<ArchiveFile> getRecentFiles(String sectionId){
        Pageable pageable=  PageRequest.of(0,5, Sort.by("id").descending());
        return archiveFileRepository.findTop5ByOrderByIdDesc(sectionId,pageable);

    }
    public List<ArchiveGetCheckedOutFileDTO> getCheckedOutFiles(String fileNumber, String fileName,String year, String sectionName, String subjectName, String employeeNIC){
        List<ArchiveFile> files= archiveFileRepository
                .findByDynamicParameters(
                        true, fileNumber, fileName,year,sectionName,subjectName, employeeNIC);
        List<ArchiveGetCheckedOutFileDTO> newfiles=files.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
        for (ArchiveGetCheckedOutFileDTO file : newfiles) {
            System.out.println(file); // Assuming you've overridden toString() in ArchiveGetCheckedOutFileDTO
        }
        return newfiles;
    }
    private ArchiveGetCheckedOutFileDTO convertToDTO(ArchiveFile file){
        return modelMapper.map(file,ArchiveGetCheckedOutFileDTO.class);
    }
    public List<ArchiveGetSearchFileDTO> getSearchFiles(String fileNumber, String fileName, String year, String sectionName, String subjectName, String employeeNIC) {
        List<ArchiveFile> files= archiveFileRepository
                .findByDynamicParameters(
                        null, fileNumber, fileName,year,sectionName,subjectName, employeeNIC);
        List<ArchiveGetSearchFileDTO> newfiles=files.stream()
                .map(this::convertToSearchDTO)
                .collect(Collectors.toList());

        return newfiles;
    }
    private ArchiveGetSearchFileDTO convertToSearchDTO(ArchiveFile file){
        return modelMapper.map(file,ArchiveGetSearchFileDTO.class);
    }
    public int getFileCountsCheckedOut(){
        return archiveFileRepository.getFileCountsCheckedOut();
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

    public void deleteArchiveFile(String sectionId,Long archiveFileId) {
        Optional<ArchiveFile> file= archiveFileRepository.findByIdAndArchiveSection_Id(archiveFileId,sectionId);
        if(file.isPresent()){
            archiveFileRepository.deleteById(archiveFileId);
        }else{
            throw new EntityNotFoundException("File with the id "+archiveFileId+" is not available in this section");
        }

    }

    @Transactional
    public void updateArchiveFile(String sectionId,Long archiveFileId,ArchiveSaveFileDTO fileDTO) {

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

    public void checkInArchiveFile(Long fileId) {
        ArchiveFile existingFile=archiveFileRepository.findById(fileId)
                .orElse(null);
        if(existingFile!=null){
            existingFile.setDateTime(null);
            existingFile.setEmployee(null);
            existingFile.setCheckedOut(false);
            archiveFileRepository.save(existingFile);

        }
    }


    public void checkOutArchiveFile(Long fileId, String employeeId) {
        ArchiveFile existingFile=archiveFileRepository.findById(fileId)
                .orElse(null);
        if(existingFile==null){
            throw new EntityNotFoundException("File with file id " +fileId +" is not found");
        }else{
           Optional<Employee> employee =employeeRepository.findById(employeeId);
            System.out.println("hoooooooooooooooooo");
            if(!employee.isPresent()){
                throw new EntityNotFoundException("Employee with id "+employeeId+" is not found.");
            }else{
                existingFile.setDateTime(LocalDateTime.now());
                existingFile.setCheckedOut(true);
                existingFile.setEmployee(employee.get());
                archiveFileRepository.save(existingFile);

            }

        }
    }
}
