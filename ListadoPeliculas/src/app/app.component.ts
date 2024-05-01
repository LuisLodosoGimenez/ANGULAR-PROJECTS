import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ComponentRef,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  viewChild,
} from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { MovieApiService } from "./services/movie-api.service"
import {
  Movie,
  MovieSearchByName,
} from "./models/interfaces/movie-search-by-name.interface"
import { ReactiveFormsModule, FormControl } from "@angular/forms"
import { CommonModule } from "@angular/common"
import { Router } from "@angular/router"
import { TestBed } from "@angular/core/testing"
import { style } from "@angular/animations"
import { timeout } from "rxjs"
import { MovieDetailsComponent } from "./pages/movie-details/movie-details.component"

enum State {
  active = 1,
  inactive = 0,
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    MovieDetailsComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = "ListadoPeliculas"
  movieSearch!: MovieSearchByName
  textSearch = new FormControl()
  InitImageUrl = "https://image.tmdb.org/t/p/w1280"
  searchState: State = State.inactive
  infoState: State = State.inactive
  movie?: Movie = undefined

  @ViewChild("body") body!: ElementRef
  @ViewChild("movie_list") movies_list!: ElementRef
  @ViewChild("movie_list_title") movie_list_title!: ElementRef
  @ViewChild("movie_title") movie_title!: ElementRef
  @ViewChild("text") titleText!: ElementRef

  constructor(
    private movieApiService: MovieApiService,
    private router: Router,
    private renderer2: Renderer2,
  ) {}

  mouseOverMovieTitle(url: string) {
    this.changeBgImageUrl(url)
    const textoo = this.titleText.nativeElement
    this.renderer2.setStyle(textoo, "color", "red")
  }

  changeBgImageUrl(url: string) {
    const body = this.body.nativeElement
    this.renderer2.setStyle(
      body,
      "background-image",
      'url("'+this.InitImageUrl + url+'")',
    )
  }

  clickMovieTitle(movie: Movie) {
    this.movie = movie
    this.infoState = 1
    this.changeMovieList()
  }

  closeMovieInfo() {
    this.infoState = 0
    this.changeMovieList()
  }

  changeMovieList() {
    this.changeLeftMarginOfList()
    this.changeWidthOfList()
    this.changeListTitle()
    this.changeMoviesTitle()
  }

  changeLeftMarginOfList() {
    const lista = this.movies_list.nativeElement
    if (this.infoState) this.renderer2.setStyle(lista, "margin-left", "1rem")
    else this.renderer2.setStyle(lista, "margin-left", "10rem")
  }

  changeWidthOfList() {
    const lista = this.movies_list.nativeElement
    if (this.infoState) this.renderer2.setStyle(lista, "width", "30%")
    else this.renderer2.setStyle(lista, "width", "50%")
  }

  changeListTitle() {
    const title = this.movie_list_title.nativeElement
    if (this.infoState) this.renderer2.setStyle(title, "font-size", "1.5rem")
    else this.renderer2.setStyle(title, "font-size", "2.25rem")
  }

  changeMoviesTitle() {
    const movieTitle = this.movie_title.nativeElement
    if (this.infoState)
      this.renderer2.setStyle(movieTitle, "font-size", "0.875rem")
    else this.renderer2.setStyle(movieTitle, "font-size", "1rem")
  }

  mouseOutList() {
    const body = this.body.nativeElement
    this.renderer2.setStyle(
      body,
      "background-image",
      'url("")',
    )
  }

  getMovies() {
    if (this.textSearch.value == "") {
      this.searchState = State.inactive
    } else this.searchState = State.active

    this.movieApiService.getMovies(this.textSearch.value).subscribe({
      next: (response) => {
        this.movieSearch = response
      },

      error: (error) => console.log(error),
    })

    setTimeout(() => {
      this.changeMovieList()
    }, 500)
  }
}
