import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestOptions, Response, XHRBackend } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Student } from '../models/student';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

    public baseUrl = '';

    constructor(private _jwHttp: Http) {

        this.baseUrl = `${environment.apiUrl}students`;
    }

    public getStudentsByType(degreeType: string): Observable<Student> {


        const url = `${this.baseUrl}/${degreeType !== '' ? 'degreetype/' + degreeType : ''}`;
        // tslint:disable-next-line:prefer-const
        let entities = this._jwHttp
            .get(url)
            .map((response: any) => response.json())
            .catch((error: any) => Observable.throw(error || 'Server error'));
        return entities;
    }
}
