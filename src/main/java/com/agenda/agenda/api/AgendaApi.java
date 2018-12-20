package com.agenda.agenda.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.agenda.agenda.entities.Note;
import com.agenda.agenda.services.AgendaService;

@RestController
@RequestMapping("/api")
public class AgendaApi {
	@Autowired
	private AgendaService agendaService;
		
	@GetMapping("/")
	@ResponseBody
	List<Note> getNotes() {				
		return agendaService.getNotes();
	}
	
	@GetMapping("/{id}")
	@ResponseBody
	Note getNote(@PathVariable("id") Long id) {				
		System.out.println("ID: " + id);
		return agendaService.getNote(id);
	}
	
	@PostMapping("/")
	@ResponseBody
	Note createNote(@RequestBody Note note) {		
		return agendaService.createNote(note);
	}
	
	@PutMapping("/update")
	Note updateNote(@RequestBody Note note) {
		return agendaService.updateNote(note);
	}
	
	@DeleteMapping("/delete/{id}")
	void deleteNote(@PathVariable("id") Long id) {
		agendaService.deleteNote(id);
	}

}
