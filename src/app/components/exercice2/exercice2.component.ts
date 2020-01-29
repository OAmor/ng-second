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

    mySlideOptions={
        loop:true,
        margin:10,
        items:3,
        dots:true,
        autoplay:true,
        autoplaySpeed:100,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }};
  
  constructor(private $ser:MoviesService) { }

  ngOnInit() {
      this.getData();
  }

  getData() {
      const observable = this.$ser.getData().pipe(
          finalize(() => this.loading = false)
      );
      this.loading = true;
      const _this = this;
      observable.subscribe(
          s => {
              _this.data = s.results;
              console.log(_this.data);
          },
          error => this.error = true
      );
  }
}
