export class Banner {
  image1 : string;
  image2 : string;
  image3 : string;
}


export class Attendance {
  leaveType : number;
  notes: string;
  date:string;
  month:Number;
}


///0 = for unplanned absenti
///1 = plan absent
///3 for public holiday


export class LatestNews {
  id : number;
  header : string;
  body : string;
  img : string;
}

export class Staff {
  name : number;
  position : string; 
  img : string;
}

export class UpcomingEvent { 
  header : string;
  date : string;
  month : string;
  time : string;
  body : string;
  venue:string;

}
export class SchoolData {
  banner : Banner; 
  news:LatestNews[];
  events:UpcomingEvent[];
  staff:Staff[];
}


