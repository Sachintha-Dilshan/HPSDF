package lk.gov.ps.HPSDF.admin.st.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "st_item")
public class STItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "item_name")
    private String itemName;

    @Column(name = "category_id")
    private Integer itemCategory;

    @Column(name = "quantity")
    private int quantity;

    @Override
    public String toString() {
        return "STItem{" +
                "id=" + id +
                ", itemName='" + itemName + '\'' +
                ", categoryId=" + itemCategory +
                ", quantity=" + quantity +
                '}';
    }
}
