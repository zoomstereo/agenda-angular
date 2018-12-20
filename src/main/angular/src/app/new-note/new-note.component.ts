import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AgendaService } from '../service/agenda.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {    

  constructor(private router: Router, private agendaService: AgendaService) { }

  ngOnInit() {
    
  }

  onSubmit(form: NgForm) {    
    if(!form.valid)
      return;
    
    this.agendaService.createNote(form.value).subscribe(note => {      
      this.router.navigateByUrl('/');
    })        
  }

}
