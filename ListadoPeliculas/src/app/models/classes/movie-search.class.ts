import {
  Movie,
  MovieSearchByName,
} from '../interfaces/movie-search-by-name.interface'

export class MovieSearch implements MovieSearchByName {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number

  constructor(
    page?: number,
    results?: Movie[],
    total_pages?: number,
    total_results?: number,
  ) {
    this.page = page ?? 0
    page
    this.results = results ?? []
    results
    this.total_pages = total_pages ?? 0
    total_pages
    this.total_results = total_results ?? 0
    total_results
  }
}
