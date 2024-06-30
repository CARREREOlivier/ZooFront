import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

declare var bootstrap: any; // Bootstrap doit être importé

@Component({
  selector: 'app-veterinaires',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgForOf],
  templateUrl: './veterinaires.component.html',
  styleUrl: './veterinaires.component.css'
})
export class VeterinairesComponent implements OnInit {

  animals: any[] = [];
  selectedAnimal: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.fetchAnimals();
  }

  fetchAnimals(): void {
    this.httpClient.get('http://localhost:8081/animals/all')
      .subscribe((response: any) => {
        this.animals = response;
      }, error => {
        console.error('Error fetching animals:', error);
      });
  }

  showAnimalDetails(animalId: number): void {
    this.httpClient.get(`http://localhost:8081/animals/${animalId}`)
      .subscribe((response: any) => {
        this.selectedAnimal = response;
        const modalElement = document.getElementById('animalDetailsModal');
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }, error => {
        console.error('Error fetching animal details:', error);
      });
  }
}
