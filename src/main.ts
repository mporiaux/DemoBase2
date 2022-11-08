import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {Personne} from "./Personne";

if (environment.production) {
  enableProdMode();
}
var p:Personne = new Personne("Dupont","Jules",2000);

console.log(p.infos());

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
