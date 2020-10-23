import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: '', component: ServersComponent},
  {path: 'servers', redirectTo: '', pathMatch: 'full'},
  {path: 'edit/:id', component: EditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
