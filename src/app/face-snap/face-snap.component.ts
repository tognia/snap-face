import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  title! : string;
  description! : string;
  createdAt! : Date;
  snaps! : number;
  imageUrl! : string;
  textButton! : string;
  userHasSnapped! : boolean;

  ngOnInit(): void{
    this.title = "Archibald";
    this.description = "Mon meilleur ami depuis toujours !";
    this.createdAt = new Date();
    this.snaps = 5;
    this.imageUrl = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg";
    this.textButton = "Oh Snap ! ";
    this.userHasSnapped = false;
  
  }

  onSnap () {

    if(this.userHasSnapped) {
        this.snaps--;
        this.textButton="Oh Snap ! ";
        this.userHasSnapped = false ;
    } else {
      this.snaps++;
      this.textButton = "Oops, un Snap!";
      this.userHasSnapped = true ;
    }
  }

}
