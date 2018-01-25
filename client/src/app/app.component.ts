import { Component, OnInit } from '@angular/core';
import { OpenDotaService } from './open-dota/service';
import { Observable } from 'rxjs/Observable';

declare const electron: any;

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
    electron.ipcRenderer.send('newLog');
    const ids = [
      49697106, 49697106, 49697106, 34782480, 50909919, 123328198, 136058418,
      102597362, 175791687, 215584294,
    ];
    this.openDota.getData(ids).subscribe((players) => {
      this.ranks = players.map(player => {
        return this.openDota.getRank(player.rank_tier);
      });
      console.log(players);
      const data = players; // change to ranked

      this.radiant = data.slice(0, 5);
      this.dire = data.slice(5);
    });
  }
}
