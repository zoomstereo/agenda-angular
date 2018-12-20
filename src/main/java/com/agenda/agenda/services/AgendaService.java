package com.agenda.agenda.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agenda.agenda.entities.Note;
import com.agenda.agenda.repository.NoteRepository;

@Service
public class AgendaService {
	@Autowired
	private NoteRepository noteRepo;
	
	public List<Note> getNotes() {
		return noteRepo.findAll();
	}
	
	public Note getNote(Long id) {
		return noteRepo.findById(id).orElse(null);
	}
	
	public Note createNote(Note note) { 
		note.setCreationDate(new Date());
		return noteRepo.save(note);
	}
	
	public Note updateNote(Note note) { 		
		return noteRepo.save(note);
	}
	
	public void deleteNote(Long id) {		
		noteRepo.deleteById(id);
	}

}
