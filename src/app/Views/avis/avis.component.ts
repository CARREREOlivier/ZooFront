import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, NgForm} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-avis',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './avis.component.html',
  styleUrl: './avis.component.css'
})
export class AvisComponent  implements OnInit {
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }
  title = 'avis';
  SERVER_URL = "http://localhost:8081/avis/";

  onSubmit(form: NgForm) {
    console.log('Your form data:', form.value);
    this.httpClient.post(this.SERVER_URL, form.value).subscribe();
  }
  ngOnInit(): void {
  }
}



