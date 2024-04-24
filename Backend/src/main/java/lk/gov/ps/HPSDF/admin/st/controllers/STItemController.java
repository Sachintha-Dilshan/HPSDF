package lk.gov.ps.HPSDF.admin.st.controllers;


import lk.gov.ps.HPSDF.admin.ar.models.ArchiveFile;
import lk.gov.ps.HPSDF.admin.st.dto.STSaveItemDTO;
import lk.gov.ps.HPSDF.admin.st.models.STItem;
import lk.gov.ps.HPSDF.admin.st.services.STItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth/st")
public class STItemController {
    private STItemService itemService;

    @Autowired
    public STItemController(STItemService itemService) {
        this.itemService = itemService;
    }


    @GetMapping("/items")
    public ResponseEntity<List<STItem>> getFiles(){
        return ResponseEntity.ok(itemService.getItems());
    }

    @PostMapping("/item")
    public ResponseEntity<String> saveArchiveFile(@RequestBody STSaveItemDTO itemDTO){
        System.out.println("hit the controller");
        System.out.println(itemDTO);
        try {
            itemService.saveStoreItem(itemDTO);
            return ResponseEntity.ok("File is successfully saved");
        }catch(Exception ex){
            System.out.println(ex.getMessage());
            return ResponseEntity.status(HttpStatus.CONFLICT).body(ex.getMessage());
        }
    }

}
