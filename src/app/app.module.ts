import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

//TODO TEMP!!! For Testing
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './characters';
//TODO TEMP!!! For Testing

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CharactersComponent } from './characters.component';
import { CharacterComponent } from './character.component';
import { CharacterDetailComponent } from './character-detail.component';
import { CharacterImageComponent } from './character-image.component';
import { CharacterChartComponent } from './character-chart.component';
import { CharacterService } from './character.service';

import { CharacterSearchComponent } from './character-search.component';
import { CharacterSearchService } from './character-search.service';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService), //TODO TEMP!!! For Testing
		AppRoutingModule ],
	declarations: [
		AppComponent,
		DashboardComponent,
		CharactersComponent,
		CharacterComponent,
		CharacterDetailComponent,
		CharacterImageComponent,
		CharacterChartComponent,
		CharacterSearchComponent ],
	providers:    [ CharacterService, CharacterSearchService ],
	bootstrap:    [ AppComponent ]
})

export class AppModule { }