import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { MovieApiService } from './services/movie-api.service'
import { MovieSearch } from './models/classes/movie-search.class'
import {
  Movie,
  MovieSearchByName,
} from './models/interfaces/movie-search-by-name.interface'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ListadoPeliculas'
  static movieSearch: MovieSearchByName = new MovieSearch()

  returnMovies(): Movie[] {
    return AppComponent.movieSearch.results
  }

  constructor(private movieApiService: MovieApiService) {}

  getMovies() {
    this.movieApiService.getMovies().subscribe({
      next: (response) => {
        AppComponent.movieSearch = response
        console.log(response)
        console.log('hola')
        console.log(response.total_results)
        console.log(AppComponent.movieSearch.total_results)
        console.log(response.page)
        console.log(AppComponent.movieSearch.page)
        console.log(response.total_pages)
        console.log(response.results[0].title)
      },

      error: (error) => null,
    })
  }
}
