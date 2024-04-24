package lk.gov.ps.HPSDF.admin.st.models;

import jakarta.persistence.*;
import lk.gov.ps.HPSDF.admin.hr.models.Employee;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "st_checkin_item")
public class STCheckInItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "seller_name")
    private String seller;

    @Column(name = "checkedin_time")
    private LocalDateTime dateTime;

    @Column(name = "quantity")
    private int quantity;

    @Override
    public String toString() {
        return "STCheckInItem{" +
                "id=" + id +
                ", seller='" + seller + '\'' +
                ", dateTime=" + dateTime +
                ", quantity=" + quantity +
                '}';
    }
}
