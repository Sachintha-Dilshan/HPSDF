package lk.gov.ps.HPSDF.admin.st.services;

import lk.gov.ps.HPSDF.admin.ar.dto.ArchiveSaveFileDTO;
import lk.gov.ps.HPSDF.admin.ar.models.ArchiveFile;
import lk.gov.ps.HPSDF.admin.st.dto.STSaveItemDTO;
import lk.gov.ps.HPSDF.admin.st.models.STItem;
import lk.gov.ps.HPSDF.admin.st.repositories.STItemRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;


@Component
public class STItemService {

    private final STItemRepository itemRepository;
    private ModelMapper modelMapper;

    @Autowired
    public STItemService(STItemRepository itemRepository, ModelMapper modelMapper) {
        this.itemRepository = itemRepository;
        this.modelMapper = modelMapper;
    }

    public List<STItem> getItems(){
        return itemRepository.findAll();
    }

    public void saveStoreItem(STSaveItemDTO itemDTO) {

        Optional<STItem> item = itemRepository.findByItemName(itemDTO.getItemName());
        System.out.println(itemDTO);
        if (item.isPresent()) {
            throw new RuntimeException("Already exist the item  " + itemDTO.getItemName());
        }

        STItem newItem = modelMapper.map(itemDTO, STItem.class);
        newItem.setQuantity(0);
//        newItem.setCategoryId(itemDTO.getItemCategory());
        itemRepository.save(newItem);
    }
}