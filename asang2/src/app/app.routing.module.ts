import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent }
/*{ path: '', component: YourComponent },
{ path: '', component: YourComponent },
{ path: '', component: YourComponent },
{ path: '', component: YourComponent },
{ path: '', component: YourComponent },*/
];

@NgModule({
imports: [ RouterModule.forRoot(appRoutes)],
exports: [ RouterModule ]
})

export class AppRoutingModule { }