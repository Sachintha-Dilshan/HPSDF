package lk.gov.ps.HPSDF.admin.st.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

@Setter
@Getter
public class STSaveItemDTO {
    private String itemName;
    private Integer itemCategory;

    public STSaveItemDTO() {
    }

    @Override
    public String toString() {
        return "STSaveItemDTO{" +
                "itemName='" + itemName + '\'' +
                ", itemCategory=" + itemCategory +
                '}';
    }
}
