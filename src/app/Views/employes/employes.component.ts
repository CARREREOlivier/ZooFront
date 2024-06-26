import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";
//import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-employes',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './employes.component.html',
  styleUrl: './employes.component.css'
})
export class EmployesComponent implements OnInit {
  data: any[] = [];
  tableHeaders: string[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData('zoo-services');
  }
  fetchData(endpoint: string) {
    this.http.get<any[]>(`${"http://localhost:8081/"}${endpoint}/all`).subscribe(response => {
      this.data = response;
      if (response.length > 0) {
        this.tableHeaders = Object.keys(response[0]);
      } else {
        this.tableHeaders = [];
      }
    });
  }
}
