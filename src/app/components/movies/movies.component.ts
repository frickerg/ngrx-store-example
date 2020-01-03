import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/Movie';

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
	movies$: Observable<Movie[]> = this.store.select(state => state.movies);

	constructor(private store: Store<{ movies: Movie[] }>) { }

	ngOnInit() {
		this.store.dispatch({ type: '[Movies Page] Load Movies' });
	}
}
