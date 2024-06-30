import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-avis',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
  SERVER_URL = "http://localhost:8081/avis/new";
  remainingChars = 500; // Initialiser à 500 parce que 500 caractères dans la textarea "commentaire"
  constructor(private httpClient: HttpClient) { }

  onSubmit(form: NgForm) {
    // Ajouter "visible: false" aux données du formulaire
    const formData = {
      ...form.value,
      visible: false
    };

    console.log('formulaire envoyé', formData);
    this.httpClient.post(this.SERVER_URL, formData).subscribe(response => {
      console.log('Response from server:', response);
    }, error => {
      console.error('Error:', error);
    });
  }

  updateCharCount(event: Event) {
    const inputElement = event.target as HTMLTextAreaElement;
    this.remainingChars = 500 - inputElement.value.length;
  }
  ngOnInit(): void { }
}


