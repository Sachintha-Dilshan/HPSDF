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
@Table(name = "archive_rack")
public class ArchiveRack {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "rack_number")
    private String RackNumber;

    @JsonIgnore
    @OneToMany(mappedBy = "rack",cascade = CascadeType.REMOVE)
    private List<ArchiveFile > files=new ArrayList<>();
}

