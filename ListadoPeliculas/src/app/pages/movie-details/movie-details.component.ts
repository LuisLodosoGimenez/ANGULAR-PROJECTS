import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { Movie } from '../../models/interfaces/movie-search-by-name.interface';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';
import { GenresApiService } from '../../services/genres-api.service';
import { LanguagesApiService } from '../../services/languages-api.service';

@Component({
  selector: "app-movie-details",
  standalone: true,
  imports: [CommonModule, AppComponent],
  templateUrl: "./movie-details.component.html",
  styleUrl: "./movie-details.component.css",
})
export class MovieDetailsComponent {
  @Input() movie!: Movie

  @Output() closeEvent = new EventEmitter<string>()

  constructor(
    private genresApiServie: GenresApiService,
    private languagesApiService: LanguagesApiService,
  ) {}

  close(){
    this.closeEvent.emit()
  }

  getGenres(): string[] {
    return this.genresApiServie.getGenresList(this.movie.genre_ids)
  }

  getLanguage(): string {
    return this.languagesApiService.getLanguage(this.movie.original_language)
  }
}
