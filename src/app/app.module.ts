import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyheaderComponent } from './myheader/myheader.component';
import { KuscheltiercardComponent } from './kuscheltiercard/kuscheltiercard.component';
import { CommonModule } from '@angular/common';
import { KuscheltiervorschlaegeComponent } from './kuscheltiervorschlaege/kuscheltiervorschlaege.component';
import { KuscheltierrowComponent } from './kuscheltierrow/kuscheltierrow.component';
import { KuscheltierfriendboxComponent } from './kuscheltierfriendbox/kuscheltierfriendbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    MyheaderComponent,
    KuscheltiercardComponent,
    KuscheltiervorschlaegeComponent,
    KuscheltierrowComponent,
    KuscheltierfriendboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
