export class FaceSnap {
    title! : string;
    description! : string;
    imageUrl! : string;
    createdAt !: Date;
    snaps! : number;
    location?: string;
    

    constructor(title : string, description : string, imageUrl : string, createdAt : Date, snaps : number) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.createdAt = createdAt;
        this.snaps = snaps;
    }

    addSnap(): void {
        this.snaps++;
    }

    removeSnap(): void {
        this.snaps--;
    }

    setLocation(location: string): void {
        this.location = location;
    }

}