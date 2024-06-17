import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterModule} from "@angular/router";
import {AuthService} from "../../auth/auth.service";


@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [
    ReactiveFormsModule, RouterModule
  ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  authService = inject(AuthService);
  router = inject(Router);

  protected loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  login() {
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value)
        .subscribe((data: any) => {
          if(this.authService.isLoggedIn()){
            this.router.navigate(['/admin']);//to be amended in include routing based on roles.
          }
          console.log(data);
        });
    }
    //CALL API with username and password
    if (this.loginForm.invalid) {
      return;
    }
    alert("Calling BackEnd to login") //to delete
  }

}
