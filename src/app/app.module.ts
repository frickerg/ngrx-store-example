import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer } from './counter.reducer';
import { CounterComponent } from './components/counter/counter.component';
import { LoginComponent } from './components/login/login.component';
import * as fromScoreboard from './reducers/scoreboard.reducer';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';

@NgModule({
	declarations: [
		AppComponent,
		CounterComponent,
		LoginComponent,
		ScoreboardComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		StoreModule.forFeature(fromScoreboard.scoreboardFeatureKey, fromScoreboard.reducer),
		StoreModule.forRoot({
			count: counterReducer,
			game: fromScoreboard.reducer
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
