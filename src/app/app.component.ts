import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Cultures } from './constants/cultures';
import { L10n, setCulture } from '@syncfusion/ej2-base';

import { PageSettingsModel } from '@syncfusion/ej2-grids';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'syncfusion-angular-app';
  public currentLang: string;
  public supportedLanguages: Array<any> = [];

  constructor(private translate: TranslateService) {
    this.currentLang = 'en-US';
    this.translate.use(this.currentLang);
    Cultures.supportedCultures.forEach((element) => {
      this.supportedLanguages.push(element);
    });
    this.langChangeEvent = translate.onLangChange.subscribe(() => {
      console.log('Reload due to language change');
  });
  }


  onLanguageSelect(event: any, lang: string): void {
    console.log('Language selected: ' + lang);
    this.translate.use(lang).subscribe(a => {
      const l10 = '{\'' + lang + '\':' + JSON.stringify(a.SYNCFUSION) + '}';
      L10n.load(l10);
      console.log('setCulture2 ' + lang.substr(0, 2));
      setCulture(lang.substr(0, 2));
    });
  }

  private langChangeEvent: Subscription;
  public items: any;

    public check : any= {check:'check1',check2:'check2'};


    ngOnInit(): void {
      this.items = [
        {
          OrderID: 10248, CustomerID: 'VINET'
        },
        {
          OrderID: 10249, CustomerID: 'TOMSP'
        },
        {
          OrderID: 10250, CustomerID: 'HANAR'
        },
        {
          OrderID: 10251, CustomerID: 'VICTE'
        },
        {
          OrderID: 10252, CustomerID: 'SUPRD'
        }];
    }

    ngOnDestroy(): void {
        this.langChangeEvent.unsubscribe();
    }

    public get locale(): string {
        return this.translate.currentLang;
    }

}
