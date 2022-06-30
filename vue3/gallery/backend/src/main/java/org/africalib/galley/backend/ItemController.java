package org.africalib.galley.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ItemController {

    @GetMapping("/api/items")
    public List<String> getItems() {
        List<String> items = new ArrayList<>();
        items.add("alpha");
        items.add("bata");
        items.add("gamma");

        return items;
    }
}
