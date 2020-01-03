import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { LoginComponent } from './components/login/login.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { counterReducer } from './counter.reducer';
import { MovieEffects } from './effects/movie.effects';
import * as fromScoreboard from './reducers/scoreboard.reducer';

@NgModule({
	declarations: [
		AppComponent,
		CounterComponent,
		LoginComponent,
		ScoreboardComponent,
		MoviesComponent
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		AppRoutingModule,
		EffectsModule.forRoot([MovieEffects]),
		StoreModule.forRoot({
			count: counterReducer,
			game: fromScoreboard.reducer
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
