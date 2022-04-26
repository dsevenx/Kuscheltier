import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  names_friends = [];
  bilder_friends = [];
  beschreibung_friends = [];

  constructor() {}

  addFriend(name: string, text: string, bild: string) {
    this.names_friends.push(name);
    this.bilder_friends.push(bild);
    this.beschreibung_friends.push(text);
  }
}
