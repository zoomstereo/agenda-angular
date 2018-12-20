package com.agenda.agenda.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agenda.agenda.entities.Note;

public interface NoteRepository extends JpaRepository<Note, Long> {
	
}
