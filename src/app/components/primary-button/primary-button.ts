import { Component, input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  templateUrl: './primary-button.html',
  styleUrl: './primary-button.scss'
})
export class PrimaryButton {
  // button value 
  buttonLabel = input("")
  handleButtonClick() {
    console.log("button clicked")
  }
}
