import { Routes } from '@angular/router';
import { AccueilComponent} from "./Views/accueil/accueil.component";
import { ZooServicesComponent} from "./Views/zoo-services/zoo-services.component";

export const routes: Routes = [
  { path: 'Accueil', component: AccueilComponent},
  { path: 'Services-zoo', component: ZooServicesComponent},
];
