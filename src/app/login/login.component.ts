import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { login } from '../actions/login.actions';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	username: string;
	password: string;

	constructor(private store: Store<{ username: string, password: string }>) { }

	ngOnInit() {
	}

	onSubmit(username: string, password: string) {
		this.store.dispatch(login({ username, password }));
		console.log(username, password)
		this.username = username;
		this.password = password;
	}
}
