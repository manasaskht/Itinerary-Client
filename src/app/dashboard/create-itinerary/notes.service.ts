import { Injectable } from '@angular/core';
import { HttpResponse, HttpHeaders, HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }


  // Gets the list of notes for the Group 
  getNotes(): Observable<any[]>{
    return this.http.get<any[]>('api/getNotes')
  }

  // Add Note to the group
  addNote(newNote): Observable<[]>{
    let headers = new HttpHeaders();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post<any>('api/addNote', newNote, {headers: headers})
  }

  // to delete the item from the existing notes
  deleteItem(id): Observable<any> {
  	return this.http.delete<any>('api/deleteNote/'+id);
  }

  // to update a prticular note in the list
  updateItem(newNote): Observable<any>{
  	let headers = new HttpHeaders();
  	headers.append('Content-Type', 'application/json'); 
  	return this.http.put<any>('api/updateItem/'+newNote._id, newNote, {headers: headers})
  }

}
