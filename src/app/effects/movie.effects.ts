import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { MoviesService } from '../services/movies.service';

@Injectable()
export class MovieEffects {

	loadMovies$ = createEffect(() =>
		this.actions$.pipe(
			ofType('[Movies Page] Load Movies'),
			mergeMap(() => this.moviesService.getAll()
				.pipe(
					map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
					catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
				)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private moviesService: MoviesService
	) { }
}
