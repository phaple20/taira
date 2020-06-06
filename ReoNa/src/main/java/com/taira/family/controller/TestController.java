package com.taira.family.controller;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*",maxAge = 20)
public class TestController {
    @GetMapping("/test")
    public List test() {
       List<HashMap<String,Object>> l = new ArrayList<>();
       HashMap<String, Object> hl = new HashMap<>();
       hl.put("name","taira");
       hl.put("age",18);
       hl.put("position", "ShangHai");
       hl.put("skill", "killer");
       l.add(hl);
       return l;
    }
}
