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
@Table(name = "st_checkout_item")
public class STCheckOutItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;

    @Column(name = "checkedout_time")
    private LocalDateTime dateTime;

    @Column(name = "quantity")
    private int quantity;


    @Override
    public String toString() {
        return "STCheckOutItem{" +
                "id=" + id +
                ", employee=" + employee +
                ", dateTime=" + dateTime +
                ", quantity=" + quantity +
                '}';
    }
}
