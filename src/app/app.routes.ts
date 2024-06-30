import { Routes } from '@angular/router';
import { AccueilComponent} from "./Views/accueil/accueil.component";
import { ZooServicesComponent} from "./Views/zoo-services/zoo-services.component";
import {EmployesComponent} from "./Views/employes/employes.component";
import {AdministrateurComponent} from "./Views/administrateur/administrateur.component";
import {ContactComponent} from "./Views/contact/contact.component";
import {ConnexionComponent} from "./Views/connexion/connexion.component";
import {HabitatComponent} from "./Views/habitat/habitat.component";
import {DashboardHabitatComponent} from "./Views/dashboard-habitat/dashboard-habitat.component";
import {AvisComponent} from "./Views/avis/avis.component";
import {ZooHorairesComponent} from "./Views/zoo-horaires/zoo-horaires.component";
import {VeterinairesComponent} from "./Views/veterinaires/veterinaires.component";

export const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'Accueil', component: AccueilComponent},
  { path: 'Services-zoo', component: ZooServicesComponent},
  { path: 'Espace-employe', component: EmployesComponent},
  { path: 'Espace-administrateur', component: AdministrateurComponent},
  { path: 'Contact', component: ContactComponent},
  { path: 'Connexion', component: ConnexionComponent},
  { path: 'Habitats', component: HabitatComponent},
  { path: 'Dashboard-Habitats', component: DashboardHabitatComponent},
  { path: 'Avis', component: AvisComponent},
  { path: 'Horaires', component: ZooHorairesComponent},
  { path: 'Espace-veto', component: VeterinairesComponent},
];
