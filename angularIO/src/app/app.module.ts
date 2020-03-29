import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchForm } from '../../molecules';
import { Button } from '../../atoms';
import { Grid } from '../../partial';
import { Header } from '../../organisms';
@NgModule({
  declarations: [
    AppComponent,
    Button,
    SearchForm,
    Grid,
    Header,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
