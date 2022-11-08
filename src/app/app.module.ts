import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentairesComponent } from './commentaires/commentaires.component';
import {FormsModule} from "@angular/forms";
import { RepertoireComponent } from './repertoire/repertoire.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentairesComponent,
    RepertoireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
