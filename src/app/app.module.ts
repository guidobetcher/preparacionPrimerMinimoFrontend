import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {SubjectService} from './services/subject.service';


@NgModule({
  declarations: [
    AppComponent,
    SubjectListComponent,
    SubjectDetailsComponent,
    StudentDetailsComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'subjects', component: SubjectListComponent },
      { path: 'subjects/:subjectId', component: SubjectDetailsComponent },
      { path: 'students/:studentId', component: StudentDetailsComponent },
    ])
  ],
  providers: [SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
