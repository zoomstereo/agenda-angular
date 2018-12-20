import { Component, OnInit, Input } from '@angular/core';
import { Note } from './../model/note.model';
import { AgendaService } from './../service/agenda.service';

@Component({
  selector: 'app-note-element',
  templateUrl: './note-element.component.html',
  styleUrls: ['./note-element.component.css']
})
export class NoteElementComponent implements OnInit {
  
  @Input() note: Note;
  @Input() updateListener;
  dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

  constructor(private agendaService: AgendaService) { }

  ngOnInit() {
      // The creation time from the API returns it in a ugly way, here is formated to look nicer      
      let date = this.note.creationDate;
      this.note.creationDate = new Date(date).toLocaleDateString('en-US', this.dateOptions);
    
  }

  deleteThis() {    
    this.agendaService.deleteNote(this.note.id).subscribe( () => {
      this.updateListener();
    })      
  }

}
