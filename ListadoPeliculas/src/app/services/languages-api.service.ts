import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Languages } from "../models/interfaces/languages-api-list.interface"

@Injectable({
  providedIn: "root",
})
export class LanguagesApiService {
  private API_URL = "https://api.themoviedb.org/3"
  private API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTMwMDNkMDUxZjI2ZjJiMDliZTA2OThjNDcxZjFlZSIsInN1YiI6IjY2MmI3ZDJkNmUwZDcyMDExYjFmYTg4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tYeg7zoJbf1sZSRGog1fqIqBFLgbqrPK2EVCK84a3lc"

  private languagesMap: Map<string, string> = new Map<string, string>()

  constructor(private http: HttpClient) {}

  getLanguage(idLanguage: string): string{
    if (this.languagesMap.size == 0) {
      this.getLanguages()
    }
    
    return this.languagesMap.get(idLanguage)?? ''
  }

  private getLanguages() {
    this.getLanguagesFromApi().subscribe({
      next: (languages) => {
        languages.forEach((language) => {
          this.languagesMap.set(language.iso_639_1, language.english_name)
        })
      },

      error: (error) => console.log(error),
    })
  }

  private getLanguagesFromApi() {
    const headers = new HttpHeaders({
      accept: "application/json",
      Authorization: `Bearer ${this.API_KEY}`,
    })

    return this.http.get<Languages>(`${this.API_URL}/configuration/languages`, {
      headers,
    })
  }
}
