package lk.gov.ps.HPSDF.admin.st.services;

import lk.gov.ps.HPSDF.admin.st.models.STCategory;
import lk.gov.ps.HPSDF.admin.st.repositories.STCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class STCategoryService {
    private STCategoryRepository categoryRepository;
    @Autowired
    public STCategoryService(STCategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<STCategory> getAllCategories() {
        System.out.println(categoryRepository.findAll());
        return categoryRepository.findAll();
    }
}
