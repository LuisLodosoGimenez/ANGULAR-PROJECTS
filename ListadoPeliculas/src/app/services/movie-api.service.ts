import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { MovieSearchByName } from '../models/interfaces/movie-search-by-name.interface'
import { Languages } from '../models/interfaces/languages-api-list.interface'
import { Genres } from '../models/interfaces/genres-api-list.interface'

@Injectable({
  providedIn: "root",
})
export class MovieApiService {
  API_URL = "https://api.themoviedb.org/3"
  API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTMwMDNkMDUxZjI2ZjJiMDliZTA2OThjNDcxZjFlZSIsInN1YiI6IjY2MmI3ZDJkNmUwZDcyMDExYjFmYTg4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tYeg7zoJbf1sZSRGog1fqIqBFLgbqrPK2EVCK84a3lc"

  constructor(private http: HttpClient) {}

  getMovies(textSearch?: string) {
    textSearch = textSearch ?? ""
    textSearch
    const query = encodeURIComponent(textSearch)

    const headers = new HttpHeaders({
      accept: "application/json",
      Authorization: `Bearer ${this.API_KEY}`,
    })

    return this.http.get<MovieSearchByName>(
      `${this.API_URL}/search/movie?query=${query}&include_adult=false&language=en-US&region=ESP`,
      { headers },
    )
  }

  getLanguages() {
    const headers = new HttpHeaders({
      accept: "application/json",
      Authorization: `Bearer ${this.API_KEY}`,
    })

    return this.http.get<Languages>(`${this.API_URL}/configuration/languages`, {
      headers,
    })
  }

  getGenres() {
    const headers = new HttpHeaders({
      accept: "application/json",
      Authorization: `Bearer ${this.API_KEY}`,
    })

    return this.http.get<Genres>(`${this.API_URL}/genre/movie/list`, {
      headers,
    })
  }
}
