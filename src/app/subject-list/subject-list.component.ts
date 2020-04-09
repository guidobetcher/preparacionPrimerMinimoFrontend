import { Component, OnInit } from '@angular/core';

import { SubjectService } from '../services/subject.service';
import { Subject } from '../models/subject';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  subjects;
  constructor(
    private subjectService: SubjectService
  ) { }

  ngOnInit(): void {
    this.subjects = this.subjectService.getSubjects().subscribe(subjects => {this.subjects = subjects; });
  }
}
