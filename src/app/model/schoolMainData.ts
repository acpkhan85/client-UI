export class Banner {
  image1 : string;
  image2 : string;
  image3 : string;
}

export class LatestNews {
  id : number;
  header : string;
  body : string;
  img : string;
}

export class UpcomingEvent { 
  header : string;
  day : string;
  body : string;
}
export class SchoolData {
  banner : Banner; 
  news:LatestNews[];
  events:UpcomingEvent[];
}


