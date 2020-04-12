import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterModule, Routes} from '@angular/router';
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
    private route: ActivatedRoute,
    private subjectService: SubjectService
  ) { }

  ngOnInit(): void {
    this.subjects = this.subjectService.getSubjects().subscribe(subjects => {this.subjects = subjects; });
  }

  subjectDetail(id: string) {
    this.subjects
  }
}
