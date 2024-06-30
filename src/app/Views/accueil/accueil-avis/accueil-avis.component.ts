import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.development";
import {NgForOf, NgIf} from "@angular/common";


@Component({
  selector: 'app-accueil-avis',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: "./accueil-avis.component.html",
  styleUrl: './accueil-avis.component.css'
})
export class AccueilAvisComponent implements OnInit {
  avis: any[] = [];
  avisRows: any[][] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAvis();
  }

  fetchAvis(): void {
    const url = `${environment.apiBaseUrl}avis/all`;
    this.http.get<any[]>(url).subscribe(response => {
      this.avis = response.filter(avis => avis.visible === true);
      this.groupAvisIntoRows();
    }, error => {
      console.error('Error fetching avis:', error);
    });
  }

  groupAvisIntoRows(): void {
    this.avisRows = [];
    for (let i = 0; i < this.avis.length; i += 3) {
      this.avisRows.push(this.avis.slice(i, i + 3));
    }
  }
}
