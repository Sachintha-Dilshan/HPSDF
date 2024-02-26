package lk.gov.ps.HPSDF.admin.leave.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PastLeaveRecordId implements Serializable {
    private int leaveId;
    private int year;
}
