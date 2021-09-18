import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import {ranking} from '../shared/ranking';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  rankings!:ranking;
  constructor(private Playerservice:PlayerService) { }

  ngOnInit(){
    this.rankings = this.Playerservice.getRanking();
  }

}
