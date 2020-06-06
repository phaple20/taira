package com.taira.family.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class uploadController {
    @RequestMapping("/uploadfile")
    public String uploadfile() {
        return "slayer";
    }
}
