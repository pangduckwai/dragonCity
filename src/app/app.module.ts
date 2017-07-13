import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { CharactersComponent } from './characters.component';
import { CharacterComponent } from './character.component';
import { CharacterDetailComponent } from './character-detail.component';
import { CharacterImageComponent } from './character-image.component';
import { CharacterChartComponent } from './character-chart.component';
import { CharacterService } from './character.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	imports: [ BrowserModule, FormsModule, AppRoutingModule ],
	declarations: [
		AppComponent,
		DashboardComponent,
		CharactersComponent,
		CharacterComponent,
		CharacterDetailComponent,
		CharacterImageComponent,
		CharacterChartComponent ],
	providers:    [ CharacterService ],
	bootstrap:    [ AppComponent ]
})

export class AppModule { }