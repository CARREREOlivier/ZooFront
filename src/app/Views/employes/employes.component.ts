import {Component, OnInit, AfterViewInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
//import {environment} from "../../../environments/environment";

declare var bootstrap: any; // Bootstrap doit être importé

@Component({
  selector: 'app-employes',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    FormsModule,
    NgClass
  ],
  templateUrl: './employes.component.html',
  styleUrl: './employes.component.css'
})
export class EmployesComponent implements OnInit,AfterViewInit {
  data: any[] = [];
  tableHeaders: string[] = [];
  displayedColumns: string[] = [];
  currentEndpoint: string = 'avis';
  selectedRow: any = {}; // Variable pour stocker la ligne sélectionnée
  alertMessage: string | null = null;
  alertClass: string = '';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData('zoo-services');// Charger les données des services par défaut
  }

  ngAfterViewInit(): void {
    // Initialiser les tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
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

//OUvre une modale pour éditer les services.
  editService(row: any): void {
    this.selectedRow = { ...row }; // Clone la ligne sélectionnée
    const modalElement = document.getElementById('editServiceModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
//sauvegarde de l'edit des
  saveChanges(): void {
    const url = `${"http://localhost:8081/"}zoo-services/${this.selectedRow.id}`;
    this.http.put(url, this.selectedRow).subscribe(response => {
      // Mettre à jour la ligne dans la table avec les nouvelles données
      const index = this.data.findIndex(item => item.id === this.selectedRow.id);
      if (index !== -1) {
        this.data[index] = this.selectedRow;
      }
      // Fermer la modale
      const modalElement = document.getElementById('editServiceModal');
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal.hide();
      // Afficher un message de succès
      this.alertMessage = 'Les modifications ont été enregistrées avec succès.';
      this.alertClass = 'alert-success';

      // Masquer l'alerte après 3 secondes
      setTimeout(() => {
        this.alertMessage = null;
      }, 3000);
    }, error => {
      // Afficher un message d'erreur
      this.alertMessage = 'Une erreur est survenue lors de l\'enregistrement des modifications.';
      this.alertClass = 'alert-danger';

      // Masquer l'alerte après 3 secondes
      setTimeout(() => {
        this.alertMessage = null;
      }, 3000);

      console.error('Error saving changes:', error);
    });
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
