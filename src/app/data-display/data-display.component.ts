import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
})
export class DataDisplayComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } })
      .subscribe(
        (response) => {
          if (response instanceof HttpErrorResponse) {
            // Handle error response
            console.error('HTTP Error:', response);
          } else {
            // Handle successful response
            this.data = response;
          }
        },
        (error) => {
          console.error('HTTP Error:', error);
        }
      );
  }
}
