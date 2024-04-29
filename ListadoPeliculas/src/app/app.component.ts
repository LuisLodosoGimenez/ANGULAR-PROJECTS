import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { MovieApiService } from './services/movie-api.service'
import { MovieSearch } from './models/classes/movie-search.class'
import {
  Movie,
  MovieSearchByName,
} from './models/interfaces/movie-search-by-name.interface'
import { ReactiveFormsModule, FormControl } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router'
import { TestBed } from '@angular/core/testing'

enum State {
  active = 1,
  inactive = 0,
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ListadoPeliculas'
  static movieSearch: MovieSearchByName = new MovieSearch()
  textSearch = new FormControl()
  InitImageUrl = 'https://image.tmdb.org/t/p/w1280'
  bgImageUrl = ''
  searchState: State = State.inactive
  infoState: State = State.inactive
  leftMarginOfList = 40
  movie?: Movie = undefined
  width = '2/4'

  constructor(
    private movieApiService: MovieApiService,
    private router: Router,
  ) {}

  mouseOverMovieTitle(url: string) {
    this.changeBgImageUrl(url)
  }

  clickMovieTitle(movie: Movie) {
    this.movie = movie
    this.infoState = 1
    this.changeLeftMarginOfList()
    this.changeWidthOfList()
  }

  changeBgImageUrl(url: string) {
    this.bgImageUrl = url
  }

  changeLeftMarginOfList() {
    if (this.infoState) this.leftMarginOfList = 4
    else this.leftMarginOfList = 40
  }

  changeWidthOfList() {
    if (this.infoState) this.width = '2/5'
    else this.width = '2/4'
  }

  returnMovies(): Movie[] {
    return AppComponent.movieSearch.results
  }

  getMovies() {
    if (this.textSearch.value == '') {
      this.searchState = State.inactive
      this.infoState = State.inactive
    } else this.searchState = State.active

    this.router.navigate(['/about'])
    this.movieApiService.getMovies(this.textSearch.value).subscribe({
      next: (response) => {
        AppComponent.movieSearch = response
      },

      error: (error) => null,
    })
  }
}
