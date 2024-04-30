import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core'
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
import { style } from '@angular/animations'

enum State {
  active = 1,
  inactive = 0,
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "ListadoPeliculas"
  static movieSearch: MovieSearchByName = new MovieSearch()
  textSearch = new FormControl()
  InitImageUrl = "https://image.tmdb.org/t/p/w1280"
  bgImageUrl = ""
  searchState: State = State.inactive
  infoState: State = State.inactive
  movie?: Movie = undefined
  lenguagesMap : Map<string,string> = new Map<string,string>
  movieLenguage! :string

  @ViewChild("lista_pelis") movies_list!: ElementRef
  @ViewChild("movie_list_title") movie_list_title!: ElementRef
  @ViewChild("movie_title") movie_title!: ElementRef
  @ViewChild("texto") texto!: ElementRef

  constructor(
    private movieApiService: MovieApiService,
    private router: Router,
    private renderer2: Renderer2,
  ) {
    this.getLanguages()
  }

  mouseOverMovieTitle(url: string) {
    this.changeBgImageUrl(url)
    const textoo = this.texto.nativeElement
    this.renderer2.setStyle(textoo, "color", "red")
  }

  changeBgImageUrl(url: string) {
    this.bgImageUrl = url
  }

  clickMovieTitle(movie: Movie) {
    this.movie = movie
    this.getMovieLenguage()

    this.infoState = 1
    this.changeLeftMarginOfList()
    this.changeWidthOfList()
    this.changeListTitle()
    this.changeMoviesTitle()
  }

  closeMovieInfo() {
    this.infoState = 0
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
    this.bgImageUrl = ""
  }

  returnMovies(): Movie[] {
    return AppComponent.movieSearch.results
  }

  getMovieLenguage(){

    this.movieLenguage = this.lenguagesMap.get(this.movie!.original_language!)?? ''
    console.log(this.movieLenguage)
  }

  getMovies() {
    if (this.textSearch.value == "") {
      this.searchState = State.inactive
      this.infoState = State.inactive
    } else this.searchState = State.active

    this.router.navigate(["/about"])
    this.movieApiService.getMovies(this.textSearch.value).subscribe({
      next: (response) => {
        AppComponent.movieSearch = response
      },

      error: (error) => console.log(error),
    })
  }

  getLanguages(){
    console.log('GET LANGUAJES')
    this.movieApiService.getLanguages().subscribe(
      {
        next: (languages) => {
          languages.forEach((language)=>{
            this.lenguagesMap.set(language.iso_639_1,language.english_name)})

            console.log(this.lenguagesMap)
          },
      
        error: (error) => console.log(error),
      }
    )
  }
}
