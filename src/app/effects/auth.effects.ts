import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { LoginActions } from '../actions';
import { AuthApiActions } from '../actions';

export interface Credentials {
	username: string;
	password: string;
}

@Injectable()
export class AuthEffects {
	login$ = createEffect(() =>
		this.actions$.pipe(
			ofType(LoginActions.login),
			exhaustMap(action =>
				this.authService.login(action.credentials).pipe(
					map(user => AuthApiActions.loginSuccess({ user })),
					catchError(error => of(AuthApiActions.loginFailure({ error })))
				)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private authService: AuthService
	) { }
}
