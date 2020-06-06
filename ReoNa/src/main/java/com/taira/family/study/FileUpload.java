package com.taira.family.study;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;


@RestController
public class FileUpload {
    private static final Logger log = LoggerFactory.getLogger(FileUpload.class);
    @RequestMapping(value = "/upload")
    public String upload(@RequestParam("file")MultipartFile file) {
        try {
            if(file.isEmpty()) {
                return "file is empty";
            }
            String fileName = file.getOriginalFilename();
            System.out.println(fileName);
            log.info("上传的文件名为："+fileName);
            String filePath = "D:\\develop\\java\\phaple\\taira\\ReoNa\\src\\main\\webapp\\WEB-INF\\images\\upload\\";
            String path = filePath + fileName;
            log.info("filepath:"+path);
            File dest = new File(path);
            if(!dest.getParentFile().exists()) {
                dest.getParentFile().mkdir();
            }
            file.transferTo(dest);
            return "upload success";
        }catch (IllegalStateException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "upload failure";
    }

}
