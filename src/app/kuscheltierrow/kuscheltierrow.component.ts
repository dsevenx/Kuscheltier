import { Component, OnInit, Input } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-kuscheltierrow',
  templateUrl: './kuscheltierrow.component.html',
  styleUrls: ['./kuscheltierrow.component.scss'],
})
export class KuscheltierrowComponent implements OnInit {
  @Input() name: string = 'Name fehlt.';
  @Input() bild: string = 'Bild fehlt';
  @Input() beschreibung: string = 'Beschreibung fehlt';
  @Input() kannFolgen: Boolean = true;

  constructor(public fs: FriendService) {}

  ngOnInit(): void {}
}
