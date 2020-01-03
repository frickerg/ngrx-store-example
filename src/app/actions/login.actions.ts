import { createAction, props } from '@ngrx/store';
import { Credentials } from '../model/User';

export const login = createAction(
	'[Login Page] Login',
	props<{ credentials: Credentials }>()
);

export const login_old = createAction(
	'[Login Page] Login',
	props<{ username: string; password: string }>()
);
