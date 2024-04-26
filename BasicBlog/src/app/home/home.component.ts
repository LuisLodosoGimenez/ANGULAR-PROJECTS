import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ArticlesService } from './articles.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  articles: any

  constructor(private articulosServicio: ArticlesService) {
    this.articles = this.articulosServicio.retornar()
  }
}
