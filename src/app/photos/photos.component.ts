import { Component, OnInit } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHTTPMsgService } from '../services/process-httpmsg.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos!:string[];

  constructor(private http: HttpClient,
    private processHTTPMsgService : ProcessHTTPMsgService) { }

  ngOnInit(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': '563492ad6f917000010000018c3cd212c9544168818fbc1bdcf1c80b'
      })
    };
    
    this.http.get( "https://api.pexels.com/v1/search?query=cricketer&per_page=20", httpOptions).subscribe(
      (data) => {
        var arr = Object.values(data)[2];
        var temp = [];

        for(let i=0 ; i<arr.length ; i++){
          temp.push(arr[i].src.small);
        }

        this.photos = temp;
        //console.log(this.photos)
      }
      );
    
  }




}
