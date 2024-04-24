package lk.gov.ps.HPSDF.admin.ar.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.Year;

@Getter
@Setter
public class ArchiveGetFileDTO {
    private String fileNumber;
    private String fileName;
    private String archiveSectionId;
    private String archiveSubjectId;
    private Year year;
    private Long rackId;
    private int boxNumber;
    private int fileIndex;

    public ArchiveGetFileDTO() {
    }

    @Override
    public String toString() {
        return "ArchiveGetFileDTO{" +
                "fileNumber='" + fileNumber + '\'' +
                ", fileName='" + fileName + '\'' +
                ", archiveSectionId=" + archiveSectionId +
                ", archiveSubjectId=" + archiveSubjectId +
                ", year=" + year +
                ", rackId=" + rackId +
                ", boxNumber=" + boxNumber +
                ", fileIndex=" + fileIndex +
                '}';
    }
}
