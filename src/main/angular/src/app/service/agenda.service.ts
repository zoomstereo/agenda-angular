import { Injectable } from "@angular/core";
import { Note } from "../model/note.model";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AgendaService {
    
    baseUrl: string = 'http://localhost:8080/agenda/api/'; 
    
    constructor(private http: HttpClient) {

    }

    getNotes() {
        return this.http.get<Note[]>(this.baseUrl);
    }

    getNoteById(id: number) {
        return this.http.get<Note>(this.baseUrl + id);
    }

    createNote(note: Note) {
        return this.http.post(this.baseUrl, note);
    }

    updateNote(note: Note) {
        return this.http.put(this.baseUrl + 'update', note);
    }

    deleteNote(id: number) {
        return this.http.delete(this.baseUrl + 'delete/' + id);
    }

}