import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableauComponent } from './pages/tableau/tableau.component';
import { StarboardComponent } from './pages/starboard/starboard.component';
import { HomeComponent } from './pages/home/home.component';
import { SkillSettingsComponent } from './pages/skill-settings/skill-settings.component';
import { AttackSettingsComponent } from './pages/attack-settings/attack-settings.component';
import { MarketComponent } from './market/market.component';
import { InnerAbilityComponent } from './inner-ability/inner-ability.component';
import { VMatrixComponent } from './vmatrix/vmatrix.component';

@NgModule({
  declarations: [
    AppComponent,
    TableauComponent,
    StarboardComponent,
    HomeComponent,
    MarketComponent,
    SkillSettingsComponent,
    AttackSettingsComponent,
    InnerAbilityComponent,
    VMatrixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
