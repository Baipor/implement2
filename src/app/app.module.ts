import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { TodoService } from './service/todo.service'
import { HttpModule } from '@angular/http';
import { ShortTextComponent } from './questions/short-text/short-text.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    ShortTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
