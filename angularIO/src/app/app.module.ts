import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchForm } from '../../molecules';
import { Button } from '../../atoms';
@NgModule({
  declarations: [
    AppComponent,
    Button,
    SearchForm,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
