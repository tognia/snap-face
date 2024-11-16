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

  ngOnInit(): void{
    this.title = "Archibald";
    this.description = "Mon meilleur ami depuis toujours !";
    this.createdAt = new Date();
    this.snaps = 5;
  }

}
