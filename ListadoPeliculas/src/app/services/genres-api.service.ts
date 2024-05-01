import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Genres } from "../models/interfaces/genres-api-list.interface"

@Injectable({
  providedIn: "root",
})
export class GenresApiService {
  private API_URL = "https://api.themoviedb.org/3"
  private API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTMwMDNkMDUxZjI2ZjJiMDliZTA2OThjNDcxZjFlZSIsInN1YiI6IjY2MmI3ZDJkNmUwZDcyMDExYjFmYTg4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tYeg7zoJbf1sZSRGog1fqIqBFLgbqrPK2EVCK84a3lc"

  private genresMap: Map<number, string> = new Map<number, string>()

  constructor(private http: HttpClient) {}

  getGenresList(idGenresList: number[]): string[] {
    if (this.genresMap.size == 0) {
      this.getGenres()
    }
    var genresList: string[] = []
    idGenresList.forEach((genre) => {
      genresList.push(this.genresMap.get(genre)!)
    })
    return genresList
  }

  private getGenres() {
    this.getGenresFromApi().subscribe({
      next: (genres) => {
        genres.genres.forEach((genre) => {
          this.genresMap.set(genre.id, genre.name)
        })
        console.log(this.genresMap)
      },

      error: (error) => console.log(error),
    })
  }

  private getGenresFromApi() {
    const headers = new HttpHeaders({
      accept: "application/json",
      Authorization: `Bearer ${this.API_KEY}`,
    })

    return this.http.get<Genres>(`${this.API_URL}/genre/movie/list`, {
      headers,
    })
  }
}
