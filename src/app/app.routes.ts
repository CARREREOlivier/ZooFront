import { Routes } from '@angular/router';
import { AccueilComponent} from "./Views/accueil/accueil.component";
import { ZooServicesComponent} from "./Views/zoo-services/zoo-services.component";
import {EmployesComponent} from "./Views/employes/employes.component";
import {AdministrateurComponent} from "./Views/administrateur/administrateur.component";
import {VeterinairesComponent} from "./Views/veterinaires/veterinaires.component";
import {ContactComponent} from "./Views/contact/contact.component";
import {ConnexionComponent} from "./Views/connexion/connexion.component";
import {HabitatComponent} from "./Views/habitat/habitat.component";
import {DashboardHabitatComponent} from "./Views/dashboard-habitat/dashboard-habitat.component";
import {AvisComponent} from "./Views/avis/avis.component";

export const routes: Routes = [
  { path: 'Accueil', component: AccueilComponent},
  { path: 'Services-zoo', component: ZooServicesComponent},
  { path: 'Espace-employe', component: EmployesComponent},
  { path: 'Espace-administrateur', component: AdministrateurComponent},
  { path: 'Espace-veterinaire', component: VeterinairesComponent},
  { path: 'Contact', component: ContactComponent},
  { path: 'Connexion', component: ConnexionComponent},
  { path: 'Habitats', component: HabitatComponent},
  { path: 'Dashboard-Habitats', component: DashboardHabitatComponent},
  { path: 'Avis', component: AvisComponent},
];
