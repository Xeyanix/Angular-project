import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSnakeModule } from 'ngx-snake';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { SnakeGameComponent } from './snake-game/snake-game.component';
import { UserInfoService } from './user-info.service';

@NgModule({
  declarations: [AppComponent, PersonFormComponent, SnakeGameComponent],
  imports: [
    BrowserModule,
    NgxSnakeModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'snake', component: SnakeGameComponent },
      { path: 'person-form', component: PersonFormComponent },
      { path: '**', redirectTo: 'person-form' },
    ]),
  ],
  providers: [UserInfoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
