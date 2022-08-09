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
  public pageSettings: PageSettingsModel;

  constructor(private translate: TranslateService) {
    this.pageSettings = { pageSize: 6 }
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
      const l10 = '{' + '"' + lang + '"' + ':' + JSON.stringify(a.SYNCFUSION) + '}';
      L10n.load(JSON.parse(l10));
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
        },
        {
            OrderID: 10253, CustomerID: 'HANAR'
        },
        {
            OrderID: 10254, CustomerID: 'CHOPS'
        },
        {
            OrderID: 10255, CustomerID: 'RICSU'
        },
        {
            OrderID: 10256, CustomerID: 'WELLI'
        },
        {
            OrderID: 10257, CustomerID: 'HILAA'
        },
        {
            OrderID: 10258, CustomerID: 'ERNSH'
        },
        {
            OrderID: 10259, CustomerID: 'CENTC'
        },
        {
            OrderID: 10260, CustomerID: 'OTTIK'
        },
        {
            OrderID: 10261, CustomerID: 'QUEDE'
        },
        {
            OrderID: 10262, CustomerID: 'RATTC'
        }
        ];
    }

    ngOnDestroy(): void {
        this.langChangeEvent.unsubscribe();
    }

    public get locale(): string {
        return this.translate.currentLang;
    }

}
