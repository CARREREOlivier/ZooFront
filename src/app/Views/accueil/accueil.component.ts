import { Component } from '@angular/core';
import {ZooPresentationComponent} from "./zoo-presentation/zoo-presentation.component";
import {AccueilServicesComponent} from "./accueil-services/accueil-services.component";
import {AccueilHabitatsComponent} from "./accueil-habitats/accueil-habitats.component";
import {AccueilAvisComponent} from "./accueil-avis/accueil-avis.component";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    ZooPresentationComponent,
    AccueilServicesComponent,
    AccueilHabitatsComponent,
    AccueilAvisComponent,
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
