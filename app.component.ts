import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'home', url: 'home', icon: 'home' },
    { title: 'customer', url: 'customer', icon: 'customer' },
    { title: 'productos', url: 'productos', icon: 'productos' },
  ];
  public labels = [];
  constructor() {}
}
