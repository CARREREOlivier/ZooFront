import {Component, OnInit, TemplateRef} from '@angular/core';
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
  displayedColumns: string[] = [];
  currentEndpoint: string = 'avis';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData('zoo-services');// Charger les données des services par défaut
  }
  fetchData(endpoint: string) {
    this.currentEndpoint = endpoint;
    this.http.get<any[]>(`${"http://localhost:8081/"}${endpoint}/all`).subscribe(response => {
      this.data = response;
      console.log(response);
      if (response.length > 0) {
        this.setTableHeaders(endpoint);
      } else {
        this.tableHeaders = [];
        this.displayedColumns = [];
      }
    });
  }

  setTableHeaders(endpoint: string) {
    switch (endpoint) {
      case 'zoo-services':
        this.tableHeaders = ['service', 'images','description', 'gestion'];
        break;
      case 'animals':
        this.tableHeaders = ['prenom', 'espece', 'images', 'habitat', 'alimentation', 'gestionAlimentation'];
        break;
      case 'avis':
        this.tableHeaders = ['visible', 'pseudo', 'commentaire', 'action'];
        break;
      case 'contact':
        this.tableHeaders = ['nom', 'email', 'message'];
        break;
      default:
        this.tableHeaders = Object.keys(this.data[0]);
    }
    this.displayedColumns = this.tableHeaders;
  }


  editService(row: any) {
    // Logique pour éditer un service
  }

  addAlimentation(row: any) {
    // Logique pour ajouter une alimentation
  }

  editAlimentation(row: any) {
    // Logique pour éditer une alimentation
  }

  deleteAlimentation(row: any) {
    // Logique pour supprimer une alimentation
  }

  readComment(row: any) {

  }
}
