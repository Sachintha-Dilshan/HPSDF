package lk.gov.ps.HPSDF.admin.ar.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ArchiveGetCheckedOutFileDTO {
    private Long id;
    private String fileNumber;
    private String fileName;
    private String sectionName;
    private String subjectName;
    private String nameWithInitials;
    private LocalDateTime dateTime;

    public ArchiveGetCheckedOutFileDTO() {
    }


}
