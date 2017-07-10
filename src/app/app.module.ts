import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

import { CharDetailComponent } from './char-detail.component';

@NgModule({
	imports:      [ BrowserModule, FormsModule ],
	declarations: [ AppComponent, CharDetailComponent ],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
