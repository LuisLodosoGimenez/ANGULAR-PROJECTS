import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor() {}

  retornar() {
    return [
      {
        image: {
          src: './assets/arbol_puesta.jpg',
          alt: 'Los misterios de las puestas de sol',
        },
        theme: 'SOL',
        title: 'Los misterios de las puestas de sol',
        description:
          'En el ocaso, el mundo se viste de sombras, y los secretos susurrados del día encuentran refugio en la oscuridad. La naturaleza revela sus enigmas al caer la noche.',
        author: {
          name: 'Paquita salas',
          quote: 'QUE MAIL?! QUE MAIL!?',
          image: {
            src: './assets/paquita_salas.jpg',
            alt: 'Paca',
          },
        },
      },

      {
        image: {
          class: 'h-full w-full object-cover object-center',
          src: './assets/lago_rosa.jpg',
          alt: 'La tranquilidad del agua',
        },
        theme: 'AGUA',
        title: 'La tranquilidad del agua',
        description:
          ' El lago refleja el cielo en su superficie serena, donde latranquilidad del agua se funde con el susurro de la brisa. En suabrazo líquido, los pensamientos se aquietan y el alma halla reposo. ',
        author: {
          name: 'Paquita salas',
          quote: 'QUE MAIL?! QUE MAIL!?',
          image: {
            class: 'w-10 h-10 rounded-full',
            src: './assets/paquita_salas.jpg',
            alt: 'Paca',
          },
        },
      },

      {
        image: {
          class: 'h-full w-full object-cover object-center',
          src: './assets/aurora_boreal.jpg',
          alt: 'Auroras',
        },
        theme: 'CIELO',
        title: 'Auroras',
        description:
          'Las auroras bailan en el lienzo del cielo nocturno, pintando con pinceladas de luz un espectáculo celestial. Colores vibrantes se entrelazan en un ballet etéreo, mientras el universo despliega sumagia ante nuestros ojos. En el silencio de la noche, las auroras susurran secretos cósmicos y despiertan el asombro en nuestros corazones.',
        author: {
          name: 'Paquita salas',
          quote: 'QUE MAIL?! QUE MAIL!?',
          image: {
            class: 'w-10 h-10 rounded-full',
            src: './assets/paquita_salas.jpg',
            alt: 'Paca',
          },
        },
      },

      {
        image: {
          class: 'h-full w-full object-cover object-center',
          src: './assets/montañas_lago.jpg',
          alt: 'La gracia de los valles',
        },
        theme: 'MONTAÑAS',
        title: 'La gracia de los valles',
        description:
          'Entre las majestuosas montañas, los ríos serpentean como hilos devida, tallando cañones y valles en su camino. Su flujo constante es lamelodía que acompaña el paisaje, alimentando la tierra y esculpiendola historia de la naturaleza.',
        author: {
          name: 'Paquita salas',
          quote: 'QUE MAIL?! QUE MAIL!?',
          image: {
            class: 'w-10 h-10 rounded-full',
            src: './assets/paquita_salas.jpg',
            alt: 'Paca',
          },
        },
      },
    ]
  }
}
