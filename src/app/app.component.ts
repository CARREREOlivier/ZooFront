import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {TestFormComponent} from "./Forms/test-form/test-form.component";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./Header/header/header.component";
import {FooterComponent} from "./Footer/footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestFormComponent, CommonModule, RouterLink, RouterLinkActive, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ZooFront';

  constructor() { }



}

