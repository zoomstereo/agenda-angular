import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgendaService } from '../service/agenda.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {  

  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private actRoute: ActivatedRoute, private agendaService: AgendaService) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      description: [''],
      creationDate: ['']
    })

    this.agendaService.getNoteById(this.actRoute.snapshot.params['id']).subscribe( note => {
      if(!note) 
        this.router.navigateByUrl('/');

      this.editForm.setValue(note);
    })
  }

  onUpdateSubmit() {                
    this.agendaService.updateNote(this.editForm.value).subscribe( note => {
      this.router.navigateByUrl('/');
    })     
  }

}
