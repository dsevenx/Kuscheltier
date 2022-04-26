import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-kuscheltierfriendbox',
  templateUrl: './kuscheltierfriendbox.component.html',
  styleUrls: ['./kuscheltierfriendbox.component.scss'],
})
export class KuscheltierfriendboxComponent implements OnInit {
  constructor(public fs: FriendService) {}

  ngOnInit(): void {}
}
