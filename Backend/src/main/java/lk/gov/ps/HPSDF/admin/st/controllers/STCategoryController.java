package lk.gov.ps.HPSDF.admin.st.controllers;

import lk.gov.ps.HPSDF.admin.st.models.STCategory;
import lk.gov.ps.HPSDF.admin.st.services.STCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth/st")
public class STCategoryController {
    private STCategoryService categoryService;
    @Autowired
    public STCategoryController(STCategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("/categories")
    public ResponseEntity<List<STCategory>> getAllCategories(){

        return ResponseEntity.ok(categoryService.getAllCategories());
    }


}
