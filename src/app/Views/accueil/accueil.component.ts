import { Component } from '@angular/core';
import {ZooPresentationComponent} from "./zoo-presentation/zoo-presentation.component";
import {AccueilServicesComponent} from "./accueil-services/accueil-services.component";
import {AccueilHabitatsComponent} from "./accueil-habitats/accueil-habitats.component";
import {AccueilAvisComponent} from "./accueil-avis/accueil-avis.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    ZooPresentationComponent,
    AccueilServicesComponent,
    AccueilHabitatsComponent,
    AccueilAvisComponent,
    RouterLink,
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
