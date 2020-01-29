import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies/movies.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.scss']
})
export class Exercice2Component implements OnInit {

  data: any;
  
  loading: boolean;
  
  error: boolean = false;

    mySlideImages = ['https://image.tmdb.org/t/p/w185_and_h278_bestv2//1yeVJox3rjo2jBKrrihIMj7uoS9.jpg',
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2//nMhv6jG5dtLdW7rgguYWvpbk0YN.jpg',
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2//7uY4pCOxbEdv4M8jTE4uMPVoSIW.jpg',
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2//f9zGxLHGyQB10cMDZNY5ZcGKhZi.jpg'
    ];

    mySlideOptions={items: 1, dots: true, nav: true};
  
  constructor(private $ser:MoviesService) { }

  ngOnInit() {
  }

  getData() {
      const observable = this.$ser.getData().pipe(
          finalize(() => this.loading = false)
      );
      this.loading = true;
      observable.subscribe(
          s => {
              this.data = s.results;
              console.log(this.data);
          },
          error => this.error = true
      );
  }
}
