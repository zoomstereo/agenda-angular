import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NoteElementComponent } from './note-element/note-element.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { AgendaService } from './service/agenda.service';


const routes = RouterModule.forRoot([
  { path: '', component: NoteListComponent },
  { path: 'new', component: NewNoteComponent },
  { path: 'note/:id', component: EditNoteComponent }  
]); 

@NgModule({
  declarations: [
    AppComponent,
    NoteElementComponent,
    NoteListComponent,
    NewNoteComponent,
    EditNoteComponent,    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routes,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
