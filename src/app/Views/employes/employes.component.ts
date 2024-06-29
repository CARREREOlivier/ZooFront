import {Component, OnInit, AfterViewInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {environment} from "../../../environments/environment";

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
  showGestionColumn: boolean = false; // Variable pour afficher/masquer la colonne contennant les actions via bouton dans le html
  subtitle: string = 'Modifier les services'; // Sous-titre par défaut
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
    this.subtitle = this.getSubtitleForEndpoint(endpoint); // Met à jour le sous-titre
      this.http.get<any[]>(`${environment.apiBaseUrl}${endpoint}/all`).subscribe(data => {
        this.data = data;
        if (data.length > 0) {
        this.tableHeaders = Object.keys(data[0]).filter(key => key !== 'id');
        this.showGestionColumn = endpoint !== 'contact';
      }
    });
  }

  setTableHeaders(endpoint: string): void {
    switch (endpoint) {
      case 'zoo-services':
        this.tableHeaders = ['nom', 'description'];
        this.showGestionColumn = true;
        break;
      case 'animals':
        this.tableHeaders = ['prenom', 'espece', 'images', 'habitat', 'alimentation'];
        this.showGestionColumn = true;
        break;
      case 'avis':
        this.tableHeaders = ['visible', 'pseudo', 'commentaire'];
        this.showGestionColumn = true;
        break;
      // Ajouter des cas pour les autres types de données
      default:
        this.tableHeaders = Object.keys(this.data[0]);
        this.showGestionColumn = false;
    }
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
    const url = `${environment.apiBaseUrl}zoo-services/${this.selectedRow.id}`;
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

  readComment(row: any): void {
    this.selectedRow = { ...row }; // Clone la ligne sélectionnée
    const modalElement = document.getElementById('readCommentModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  getSubtitleForEndpoint(endpoint: string): string {
    switch (endpoint) {
      case 'zoo-services':
        return 'Modifier les services';
      case 'animals':
        return 'Alimentation des animaux';
      case 'avis':
        return 'Validation des avis';
      case 'contact':
        return 'Gestion Contact';
      default:
        return 'Espace Employé(e)';
    }
  }
  toggleCommentVisibility(): void {
    this.selectedRow.visible = !this.selectedRow.visible; // Inverser l'état de visibilité
    const url = `${"http://localhost:8081/"}avis/${this.selectedRow.id}`;
    this.http.put(url, this.selectedRow).subscribe(response => {
      // Mettre à jour la ligne dans la table avec les nouvelles données
      const index = this.data.findIndex(item => item.id === this.selectedRow.id);
      if (index !== -1) {
        this.data[index] = this.selectedRow;
      }
      // Fermer la modale
      const modalElement = document.getElementById('readCommentModal');
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal.hide();

      // Afficher un message de succès
      this.alertMessage = this.selectedRow.visible
        ? 'L\'avis a été rendu visible avec succès.'
        : 'L\'avis a été rendu invisible avec succès.';
      this.alertClass = 'alert-success';

      // Masquer l'alerte après 3 secondes
      setTimeout(() => {
        this.alertMessage = null;
      }, 3000);
    }, error => {
      // Afficher un message d'erreur
      this.alertMessage = 'Une erreur est survenue lors de la mise à jour de l\'avis.';
      this.alertClass = 'alert-danger';

      // Masquer l'alerte après 3 secondes
      setTimeout(() => {
        this.alertMessage = null;
      }, 3000);

      console.error('Error toggling comment visibility:', error);
    });
  }
}
