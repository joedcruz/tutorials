import { REGISTEREDUSERS } from './mock-registeredusers';
import { RegisteredUser } from './registereduser';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RegistereduserService {

  registeredUser: RegisteredUser[];
  private registeredUsersUrl = 'http://localhost:5000/api/users';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`RegisteredUserService: ${message}`);
  }

  // getRegisteredUser(id: string): Observable<RegisteredUser> {
  //   // TODO: send the message _after_ fetching the hero
  //   this.messageService.add(`RegisteredUserService: fetched user id=${id}`);
  //   return of(REGISTEREDUSERS.find(reguser => reguser.userId === id));
  // }

  getRegisteredUser(id: string): Observable<RegisteredUser> {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3M2IyNzNjOTRhODc0MzhjYjc1ODMwNzNhMzg2M2JlYiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJ1c2VyMSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiZWY1YmUwMWYtY2MwZC00ZTY5LWI4MTktYjc3ZjhiMmQ5NGYzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkJhY2tvZmZpY2UiLCJBZG1pbiJdLCJleHAiOjE1NDYxMDQwMTMsImlzcyI6IlRUQSIsImF1ZCI6IlRUQSJ9.lG4hQ3rmlTrzZkh5dEphHgzN0wqOdYZCetHlaHa5Iws'
        //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxZDgwOTk2Mjc5M2Q0YzZkOTQ2MmRjYzRiZDk1MDJlYyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJ1c2VyMiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiZWNiMGJkNTgtMWI3Ny00ZGI4LWIyOTEtZDBjOWExZmQxMGZlIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQ2xpZW50IiwiZXhwIjoxNTQ2MTAzNjIwLCJpc3MiOiJUVEEiLCJhdWQiOiJUVEEifQ.Eld52mtZ7zcv3OSKRqbVrSe2uBAZ6iedU043K2ThS8c'
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmNTEzNTlmMWNkZTY0OGJiOTYzYmFmNWVhZDAwZWI4YSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJ1c2VyMyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiN2MwMmZjMDYtY2VlOS00YTE0LTkzN2ItMzVkMjZkYWRkNTRkIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkRyaXZlciIsIkJhY2tvZmZpY2UiXSwiZXhwIjoxNTQ2MTAzNDE0LCJpc3MiOiJUVEEiLCJhdWQiOiJUVEEifQ.7EDBI4dUXjp3urp2jaCp6EP_czkM-lPRjIys154yM2A'
      })
    };

    const url = 'http://localhost:5000/api/UserInfo';
    return this.http.post<RegisteredUser>(url, this.registeredUser, httpOptions).pipe(
      tap(_ => this.log('fetched registeredUser')),
      catchError(this.handleError<RegisteredUser>('getRegisteredUser'))
    );

    // const url = `${this.registeredUsersUrl}/${id}`;
    // return this.http.get<RegisteredUser>(url).pipe(
    //   tap(_ => this.log(`fetched registeredUser id=${id}`)),
    //   catchError(this.handleError<RegisteredUser>(`getRegisteredUser id=${id}`))
    // );
  }

  getRegisteredUsers(): Observable<RegisteredUser[]> {
    this.messageService.add('RegisteredUserService: fetched registered users');
    // return of (REGISTEREDUSERS);
    return this.http.get<RegisteredUser[]>(this.registeredUsersUrl)
      .pipe(
        tap(_ => this.log('fetched registeredUsers')),
        catchError(this.handleError('getRegisteredUsers',[]))
      );
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
