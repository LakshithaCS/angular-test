import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Observable, of } from 'rxjs';
import {players} from '../shared/players';
import {player} from '../shared/player';
import {ranking} from '../shared/ranking';
import {rankings} from '../shared/rankings';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient,
    private processHTTPMsgService : ProcessHTTPMsgService) { }

  getPlayer(name: String): player {

    const nameArr = name.split(" ");
    var plyr!:player;

    for(let i=0 ; i<players.length ; i++){

      const nameArr1 = players[i].name.split(" ");

      if(nameArr.length == 1 && (nameArr[0] === nameArr1[0] || nameArr[0] === nameArr1[1])){
        plyr = players[i];
      }else if (name === players[i].name){
        plyr = players[i]
      }

    }
    return plyr;
  }

  getRanking(): ranking {
    return rankings;
  }
}


