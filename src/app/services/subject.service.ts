import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Subject} from '../models/subject';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  url = 'http://localhost:8080';
  constructor(
    private http: HttpClient
  ) {}

  getSubjects(): Observable<Subject[]>{
    console.log('DOING GET REQUEST');
    return this.http.get<Subject[]>(this.url + '/subjects');
  }

  getSubjectById(subject: string): Observable<Subject> {
    console.log('GET SUBJECT WITH ID: ' + subject);
    return this.http.get<Subject>(this.url + '/subjects/' + subject);
  }
}
