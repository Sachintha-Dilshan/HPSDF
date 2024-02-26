package lk.gov.ps.HPSDF.admin.ar.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.Year;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "archive_file")
public class ArchiveFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "file_number",unique = true)
    private String fileNumber;
    @Column(name = "file_name",unique=true)
    private String fileName;
    @ManyToOne
    @JoinColumn(name = "section_id",referencedColumnName = "id")//foreign key for SectionId
    private ArchiveSection archiveSection;
    @ManyToOne
    @JoinColumn(name = "subject_id",referencedColumnName = "id")//foreign key for Subject
    private ArchiveSubject archiveSubject;

    private Year year;
    @ManyToOne
    @JoinColumn(name = "rack_id",referencedColumnName = "id")//foreign key for RackId
    private ArchiveRack rack;
    @Column(name = "box_number")
    private int boxNumber;
    @Column(name ="file_index")
    private int fileIndex;

    @Override
    public String toString() {
        return "ArchiveFile{" +
                "id=" + id +
                ", fileNumber='" + fileNumber + '\'' +
                ", fileName='" + fileName + '\'' +
                ", archiveSection=" + archiveSection +
                ", archiveSubject=" + archiveSubject +
                ", year=" + year +
                ", rack=" + rack +
                ", boxNumber=" + boxNumber +
                ", fileIndex=" + fileIndex +
                '}';
    }
}
