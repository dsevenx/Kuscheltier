import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kuscheltiercard',
  templateUrl: './kuscheltiercard.component.html',
  styleUrls: ['./kuscheltiercard.component.scss'],
})
export class KuscheltiercardComponent implements OnInit {
  @Input() text: string = 'text fehlt';
  @Input() bild: string = 'bild fehlt';

  constructor() {}

  ngOnInit(): void {}
}
