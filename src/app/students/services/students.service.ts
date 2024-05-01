import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ICourse } from '@models/shared/i-course';
import { Observable, of } from 'rxjs';

export  interface ICourseResponse {
    purchased: ICourse[];
    others: ICourse[]
}

const res: ICourseResponse = {
    purchased: [
        {
            desc: 'Lorem lorem salom dunyo alo salom',
            id: '12',
            imgSrc: 'assets/images/angular.svg',
            mentorId: '34343434',
            mentorName: 'Sunnatillo Askaraliyev',
            name: 'Angular Advenced',
            // Details
            lessons: [],
            link: [],
            tariffs: []
        }
    ],
    others: [
        {
            desc: 'Lorem lorem salom dunyo alo salom',
            id: '12',
            imgSrc: 'assets/images/angular.svg',
            mentorId: '34343434',
            mentorName: 'Xusniddin Qurbonboyev',
            name: 'Nodejs Advenced',
            // Details
            lessons: [],
            link: [],
            tariffs: []
        },
        {
            desc: 'Lorem lorem salom dunyo alo salom',
            id: '12',
            imgSrc: 'assets/images/angular.svg',
            mentorId: '34343434',
            mentorName: 'Sunnatillo Askaraliyev',
            name: 'Vue Advenced',
            // Details
            lessons: [],
            link: [],
            tariffs: []
        },
        {
            desc: 'Lorem lorem salom dunyo alo salom',
            id: '12',
            imgSrc: 'assets/images/angular.svg',
            mentorId: '34343434',
            mentorName: 'Asad Aliyev',
            name: 'Java Advenced',
            // Details
            lessons: [],
            link: [],
            tariffs: []
        },
    ]
}

@Injectable({ providedIn: 'root' })
export class StudentsService {
  private  httpClient$ = inject(HttpClient)

    getAllCourses(): Observable<ICourseResponse> {
        return of(res)
        //  this.httpClient$.get<ICourseResponse>('api')
    }

}