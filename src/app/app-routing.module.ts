import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from "./components/landing/landing.component";
import {ProjectDetailsComponent} from "./components/project-details/project-details.component";
import {NAVIGATION_PATH} from "./mocks/shared";

const routes: Routes = [
  {path: NAVIGATION_PATH.MAIN, component: LandingComponent},
  {path: NAVIGATION_PATH.PROJECT_DETAILS, component: ProjectDetailsComponent},
  {path: '', redirectTo: `/${NAVIGATION_PATH.MAIN}`, pathMatch: 'full'},
  {path: '**', redirectTo: `/${NAVIGATION_PATH.MAIN}`},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
