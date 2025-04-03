import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { CharacterlistComponent } from './app/components/characterlist/characterlist.component';
import { CharacterdetailsComponent } from './app/components/characterdetails/characterdetails.component';

const routes: Routes = [
  { path: '', component: CharacterlistComponent },
  { path: 'character/:name', component: CharacterdetailsComponent }  // Using name as identifier
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
});
