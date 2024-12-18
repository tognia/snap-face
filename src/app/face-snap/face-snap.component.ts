import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass, UpperCasePipe, DatePipe, DecimalPipe, PercentPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, UpperCasePipe, DatePipe, DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  textButton!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis toujours !';
    this.createdAt = new Date();
    this.snaps = 5;
    this.imageUrl =
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.textButton = 'Oh Snap ! ';
    this.userHasSnapped = false;
  }

  onSnap() {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap() {
    this.faceSnap.removeSnap();
    this.textButton = 'Oh Snap ! ';
    this.userHasSnapped = false;
  }

  snap() {
    this.faceSnap.addSnap();
    this.textButton = 'Oops, un Snap!';
    this.userHasSnapped = true;
  }
}
