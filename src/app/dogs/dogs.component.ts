import { Component, OnInit } from '@angular/core';
import { DogsService } from '../services/dogs.service'

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dog:any;

  constructor(private dogsService:DogsService) { }

  ngOnInit(): void {
    this.getDog();
  }

  getDog(){
    this.dogsService.getDog().subscribe( resp =>{
      console.log(resp);
      this.dog = resp.url;
      if(this.dog.includes('mp4')){
        this.getDog();
      }
    })
  }

}
