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
