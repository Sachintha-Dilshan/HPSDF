package lk.gov.ps.HPSDF.admin.ar.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "archive_subject")
public class ArchiveSubject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "subject_name")
    private String subjectName;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "section_id",referencedColumnName = "id") //foreign key for Section entity
    private ArchiveSection archiveSection;
    @JsonIgnore
    @OneToMany(mappedBy = "archiveSubject",cascade = CascadeType.REMOVE)
    private List<ArchiveFile> files=new ArrayList<>();//relationship between file and subject

}
