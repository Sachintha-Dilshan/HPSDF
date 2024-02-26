package lk.gov.ps.HPSDF.admin.leave.services;


import lk.gov.ps.HPSDF.admin.leave.models.PastLeaveRecord;
import lk.gov.ps.HPSDF.admin.leave.repositories.PastLeaveRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PastLeaveRecordService {
    @Autowired
    private PastLeaveRecordRepository pastLeaveRecordsRepository;

    public PastLeaveRecord add(PastLeaveRecord pastLeaveRecord){
        return pastLeaveRecordsRepository.save(pastLeaveRecord);
    }


    public List<Object[]> getByLeaveId(int leaveId){
        return pastLeaveRecordsRepository.findRecordById(leaveId);
    }

    public PastLeaveRecord update(PastLeaveRecord pastLeaveRecord){
        PastLeaveRecord existingRecord = pastLeaveRecordsRepository.findRecord(pastLeaveRecord.getLeaveId(), pastLeaveRecord.getYear());
        if(existingRecord != null){
            existingRecord.setCasualLeave(pastLeaveRecord.getCasualLeave());
            existingRecord.setVacationLeave(pastLeaveRecord.getVacationLeave());
            return pastLeaveRecordsRepository.save(existingRecord);
        } else
            return existingRecord;
    }

    public boolean delete(int leaveId,int year){
        PastLeaveRecord pastLeaveRecord = pastLeaveRecordsRepository.findRecord(leaveId, year);
        if(pastLeaveRecord != null)
        {
            pastLeaveRecordsRepository.deleteRecord(leaveId, year);
            return true;
        }
        else
            return false;
   }
}
