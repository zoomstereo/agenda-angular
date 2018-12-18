package com.agenda.agenda.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AgendaApi {
	
	@RequestMapping("/hello")
	@ResponseBody
	String hello() {
		return "Hello, MF";
	}

}
