package com.taira.family.controller;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class CrossController {
    @GetMapping("/finduser/{id}")
    public List finduser(@PathVariable(value = "id") Integer id,@RequestParam(value = "t") Integer t) {
        List<HashMap<String,Object>> f = new ArrayList<>();
        HashMap<String,Object> h = new HashMap<>();
        h.put("id" , id);
        f.add(h);
        System.out.println(t);
        return f;
    }
}
