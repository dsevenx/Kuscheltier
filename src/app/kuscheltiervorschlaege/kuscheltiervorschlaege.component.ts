import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kuscheltiervorschlaege',
  templateUrl: './kuscheltiervorschlaege.component.html',
  styleUrls: ['./kuscheltiervorschlaege.component.scss'],
})
export class KuscheltiervorschlaegeComponent implements OnInit {
  names_vorschlaege = ['teddy banky', 'shawn'];
  bilder_vorschlaege = [
    'assets/image/KB_teddy_bank.jpg',
    'assets/image/KB_schaf.jpg',
  ];
  beschreibung_vorschlaege = [
    '3 Jahre alt. Sitzt am liebsten auf seiner Bank.',
    '2 Jahre alt und schaut gern Fern.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
