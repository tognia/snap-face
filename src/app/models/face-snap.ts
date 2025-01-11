import { SnapType } from "./snap-type.type";

export class FaceSnap {
    title! : string;
    description! : string;
    imageUrl! : string;
    createdAt !: Date;
    snaps! : number;
    location?: string;
    id?: string;
    

    constructor(title : string, description : string, imageUrl : string, createdAt : Date, snaps : number) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.createdAt = createdAt;
        this.snaps = snaps;
        this.id = crypto.randomUUID().substring(0,8);
    }

    addSnap(): void {
        this.snaps++;
    }

    removeSnap(): void {
        this.snaps--;
    }

    snap(snapType: SnapType) {
        if (snapType === 'snap') {
          this.addSnap();
        } else if (snapType === 'unsnap') {
          this.removeSnap();
        }
    }

    setLocation(location: string): void {
        this.location = location;
    }

    withLocation (location: string): FaceSnap {
        this.setLocation(location);
        return this;
      }
  

}