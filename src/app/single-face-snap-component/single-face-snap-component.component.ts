import { Component } from '@angular/core';
import { NgStyle, NgClass, UpperCasePipe, DatePipe, DecimalPipe, PercentPipe, CurrencyPipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap-component',
  standalone: true,
  imports: [NgStyle, NgClass, UpperCasePipe, DatePipe, DecimalPipe, PercentPipe, CurrencyPipe, RouterLink],
  templateUrl: './single-face-snap-component.component.html',
  styleUrl: './single-face-snap-component.component.scss'
})
export class SingleFaceSnapComponentComponent  {
  faceSnap!: any;
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  textButton!: string;
  userHasSnapped!: boolean;
  constructor (private faceSnapsService : FaceSnapsService,
               private route: ActivatedRoute
  ){}
  

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  }

  private prepareInterface() {
    this.textButton = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'] as string;
this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.textButton = 'Oh Snap ! ';
    this.userHasSnapped = false;
  }

  snap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.textButton = 'Oops, un Snap!';
    this.userHasSnapped = true;
  }
  
}

