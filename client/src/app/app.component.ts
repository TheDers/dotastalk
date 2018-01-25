import { Component, OnInit } from '@angular/core';
import { OpenDotaService } from './open-dota/service';

import { set } from 'lodash';


const DEFAULT_PROFILE = {
  avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
  cheese: 0,
  last_login: 'n/a',
  loccountrycode: "n/a",
  name: 'n/a',
  personaname: 'n/a',
  profileurl: 'n/a',
  steamid: 'n/a',
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public dire: any[];
  public radiant: any[];
  public ranks: any[];

  constructor(private openDota: OpenDotaService) {
  }

  public ngOnInit(): void {
    // this.seedData([
    //   49697106, 49697106, 49697106, 34782480, 50909919, 123328198, 136058418,
    //   102597362, 175791687, 215584294,
    // ]);
  }

  public seedData(ids) {
    this.openDota.getData(ids).subscribe((players) => {
      this.ranks = players.map(player => {
        return this.openDota.getRank(player.rank_tier);
      });
      let transformedPlayers = [];
      players.forEach((player) => {
        if(player.profile) {
          transformedPlayers.push(player);
        } else {
          transformedPlayers.push(set(player, 'profile', DEFAULT_PROFILE));
        }
      });
      console.log(transformedPlayers);
      const data = transformedPlayers;
      //   .map(player => {
      //   if(player.profile.avatar) {
      //     return Object.assign({}, player);
      //   } else {
      //     return Object.assign({}, player, player.profile.avatar = '')
      //   }
      // });

      this.radiant = data.slice(0, 5);
      this.dire = data.slice(5);
    });
  }
}
