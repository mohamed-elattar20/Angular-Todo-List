import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersListComponent } from './Components/users-list/users-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './Components/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ToDoFormComponent } from './Components/to-do-form/to-do-form.component';
import { ToDoShowComponent } from './Components/to-do-show/to-do-show.component';
import { MoviesListComponent } from './Components/movies-list/movies-list.component';
import { MoviesCardComponent } from './Components/movies-card/movies-card.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    CardComponent,
    ToDoFormComponent,
    ToDoShowComponent,
    MoviesListComponent,
    MoviesCardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
