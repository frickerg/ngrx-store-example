import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class MoviesService {
	constructor(private http: HttpClient) { }

	getAll() {
		try {
			return this.http.get('/movies');
		} catch {
			error => console.log(error);
		}
	}
}
