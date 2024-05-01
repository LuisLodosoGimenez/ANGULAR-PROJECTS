import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { Movie } from '../../models/interfaces/movie-search-by-name.interface';
import { Prueba } from '../../models/classes/movie-search.class';

@Component({
  selector: "app-prueba",
  standalone: true,
  imports: [],
  templateUrl: "./prueba.component.html",
  styleUrl: "./prueba.component.css",
})
export class PruebaComponent {

  @Input() texto: string = 'no va'
  @Input() movie!: Movie
}
