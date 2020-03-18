import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import {  tap } from 'rxjs/operators';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  public values$: any
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.values$ = this.getValues();
  }

  private getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(result => 
    this.values$ = result );
  }
}
