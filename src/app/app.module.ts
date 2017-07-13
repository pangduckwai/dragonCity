import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { CharactersComponent } from './characters.component';
import { CharacterDetailComponent } from './character-detail.component';
import { CharacterService } from './character.service';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	imports: [ BrowserModule, FormsModule, AppRoutingModule ],
	declarations: [ AppComponent, DashboardComponent, CharactersComponent, CharacterDetailComponent ],
	providers:    [ CharacterService ],
	bootstrap:    [ AppComponent ]
})

export class AppModule { }