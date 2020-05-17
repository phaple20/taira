package com.taira.family;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

//@ImportResource(locations = {"classpath:beans.xml"})
@SpringBootApplication
public class TairaApplication {

	public static void main(String[] args) {
		SpringApplication.run(TairaApplication.class, args);
	}

}
