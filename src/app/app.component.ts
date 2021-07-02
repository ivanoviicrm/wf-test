import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _appService: AppService) {}

  ngOnInit() {
    this._appService.getToken().subscribe((data) => {
      debugger;
    });
  }
}
