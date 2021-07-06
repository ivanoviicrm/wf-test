import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tableLoading = true;
  marketData: any[] = [];

  constructor(private _appService: AppService) {}

  ngOnInit() {
    this._getMarketData();
  }

  // Public

  trackByFn(index: number, item: any) {
    return item.name;
  }

  // Private
  _getMarketData(): void {
    this._appService
      .getMarketData()
      .pipe(first())
      .subscribe((data) => {
        this.marketData = data[0];
        this.tableLoading = false;
      });
  }
}
