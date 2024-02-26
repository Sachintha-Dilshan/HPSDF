package lk.gov.ps.HPSDF.admin.ar.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.repository.cdi.Eager;

import java.util.ArrayList;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "archive_section")
public class ArchiveSection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "section_name")
    private String sectionName;

    @OneToMany(mappedBy = "archiveSection",cascade = CascadeType.REMOVE)//relationship between Section and subjects
    List<ArchiveSubject> subjects=new ArrayList<>();
    @JsonIgnore
    @OneToMany(mappedBy = "archiveSection",cascade= CascadeType.REMOVE)//relationship between Section and files
    private List<ArchiveFile> files=new ArrayList<>();



}
