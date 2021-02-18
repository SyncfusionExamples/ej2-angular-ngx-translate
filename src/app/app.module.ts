import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {GridAllModule} from '@syncfusion/ej2-angular-grids';

import { loadCldr } from '@syncfusion/ej2-base';
import * as numberingSystems from '../../node_modules/cldr-data/supplemental/numberingSystems.json';
import * as gregorianDE from '../../node_modules/cldr-data/main/de/ca-gregorian.json';
import * as numbersDE from '../../node_modules/cldr-data/main/de/numbers.json';
import * as detimeZoneNamesDE from '../../node_modules/cldr-data/main/de/timeZoneNames.json';
import * as gregorianEN from '../../node_modules/cldr-data/main/en/ca-gregorian.json';
import * as numbersEN from '../../node_modules/cldr-data/main/en/numbers.json';
import * as detimeZoneNamesEN from '../../node_modules/cldr-data/main/en/timeZoneNames.json';
import { HttpClient, HttpClientModule } from '@angular/common/http';
loadCldr(numberingSystems, gregorianDE, gregorianEN, numbersDE, numbersEN, detimeZoneNamesDE, detimeZoneNamesEN);

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GridAllModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
