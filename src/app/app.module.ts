import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameWindowComponent } from './Component/window/game-window/game-window.component';
import { ComponentWindowComponent } from './Component/window/component-window/component-window.component';
import { GameObjectWindowComponent } from './Component/window/game-object-window/game-object-window.component';
import { BarMenuWindowComponent } from './Component/window/bar-menu-window/bar-menu-window.component';

@NgModule({
  declarations: [
    AppComponent,
    GameWindowComponent,
    ComponentWindowComponent,
    GameObjectWindowComponent,
    BarMenuWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
