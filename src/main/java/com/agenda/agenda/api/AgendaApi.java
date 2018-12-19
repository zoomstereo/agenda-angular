package com.agenda.agenda.api;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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

@RestController
@RequestMapping("/api")
public class AgendaApi {
		
	@GetMapping("/")
	@ResponseBody
	List<Note> getNotes() {
		List<Note> notes = new ArrayList<Note>();
		notes.add(new Note(1, "Primer titulo", "Una breve descripcion", new Date()));
		notes.add(new Note(2, "Peliculas buenas", "Interestellar, Avengers, Mr.Nobody", new Date()));
		notes.add(new Note(3, "TODO", "Cocinar, limpiar, organizar, trabajar", new Date()));
		
		return notes;
	}
	
	@GetMapping("/{id}")
	@ResponseBody
	Note getNote(@PathVariable("id") Long id) {				
		return new Note(id, "A Single note", "This is a simple description", new Date());
	}
	
	@PostMapping("/")
	String createNote(@RequestBody Note note) {
		
		return null;
	}
	
	@PutMapping("/update")
	String updateNote(@RequestBody Note note) {
		System.out.println(note);
		return null;
	}
	
	@DeleteMapping("/delete/{id}")
	String deleteNote(@PathVariable("id") Long id) {
		
		return null;
	}

}
