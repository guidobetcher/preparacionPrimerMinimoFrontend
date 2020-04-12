import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SubjectService} from '../services/subject.service';
import {SubjectListComponent} from '../subject-list/subject-list.component';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.css']
})
export class SubjectDetailsComponent implements OnInit {
  subject;
  constructor(
    private subjectService: SubjectService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('subject'));
      this.subject = this.subjectService.getSubjectById(params.get('subject')).subscribe(subject => {this.subject = subject; });
      console.log(this.subject);
    });
  }
}
