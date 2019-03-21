import { Injectable } from '@angular/core';
import { HttpResponse, HttpHeaders, HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serverUrls } from 'src/app/shared/utilities/app.urls.helper';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }


  // Gets the list of notes for the Group 
 public getNotes(itineraryId: string) {
    let url = serverUrls.listNotes;
    let params = {
        itineraryId
    };
  return this.http.get(url, { params: params });
  }

  // Add Note to the group
  public createNote(title: string, description: string, itineraryId: string) {
    let url = serverUrls.createNote;
        let body = {
            title,
            description,
            itineraryId
        };
        return this.http.post(url, body);
  }

  // to delete the note from the existing notes
  deleteNote(id: string) {
    let url = serverUrls.deleteNote;

  	return this.http.delete(url, {params: {_id: id}});
  }

  // to update a prticular note in the list
  updateNote(title: string, description: string, noteId: string) {
    let url = serverUrls.updateNote;
  	let body = {
      title,
      description,
      noteId
  };
  	return this.http.put(url, body);
  }

}
