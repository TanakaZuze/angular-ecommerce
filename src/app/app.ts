import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: '<app-header/>, <h1>gtv</h1>',
  styles: ''
})
export class App {
  protected title = 'angular-ecommerce';
}
