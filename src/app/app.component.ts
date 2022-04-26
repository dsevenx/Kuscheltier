import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myfirst-angular-project';

  kuscheltiertext = [
    'Hallo ich bin Enti !',
    'Hallo ich bin Euli !',
    'Hallo ich bin der Teddi !',
  ];

  bilder = [
    'assets/image/KB_ENTE.jpg',
    'assets/image/KB_Eule.jpg',
    'assets/image/KB_Teddy.jpg',
  ];

  buttonClicked() {
    alert('wer hat den Button gedrückt ?');
  }
}
