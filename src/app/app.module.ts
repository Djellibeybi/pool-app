import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpelersComponent } from './spelers/spelers.component';
import { PartijenComponent } from './partijen/partijen.component';
import { HeaderComponent} from './header/header.component';
import {FormsModule} from '@angular/forms';
import { PartijenListComponent } from './partijen/partijen-list/partijen-list.component';
import { StartGameComponent } from './start-game/start-game.component';

@NgModule({
  declarations: [
    AppComponent,
    SpelersComponent,
    PartijenComponent,
    HeaderComponent,
    PartijenListComponent,
    StartGameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
