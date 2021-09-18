import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import {player} from '../shared/player';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  name!:string;
  player!:player;

  constructor(private Playerservice:PlayerService) { }

  ngOnInit(): void {
  }

  onSubmit(name:string) {
    
    this.player = this.Playerservice.getPlayer(name)
    console.log('User: ', this.player);
  }

}
