package com.agenda.agenda;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class AgendaApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(AgendaApplication.class, args);
	}

}

