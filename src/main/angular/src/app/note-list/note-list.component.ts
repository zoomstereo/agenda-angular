import { Component, OnInit } from '@angular/core';
import { AgendaService } from './../service/agenda.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes;

  constructor(private agendaService: AgendaService) { }

  ngOnInit() {      
    this.fetchNotes();
  }

  updateList = () => {    
    this.fetchNotes();
  }

  fetchNotes() {
    this.agendaService.getNotes().subscribe(notes => {      
      this.notes = notes;
    });
  }
  
}
