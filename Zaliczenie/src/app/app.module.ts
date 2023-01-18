import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSnakeModule } from 'ngx-snake';


import { AppComponent } from './app.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { SnakeGameComponent } from './snake-game/snake-game.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent,
    SnakeGameComponent
  
  ],
  imports: [
    BrowserModule,
    NgxSnakeModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
