import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs/observable/forkJoin';

const URL = 'https://api.opendota.com/api/players/';
const RANKS = ["Herald", "Guardian", "Crusader", "Archon", "Legend", "Ancient", "Divine"];

@Injectable()
export class OpenDotaService {
  constructor(private http: HttpClient) {}

  public getData(ids): Observable<any> {
    return forkJoin(ids.map(id => this.http.get(`${URL}${id}`)))
  }


  public getRank(rankTier:number): string[] {
    const tier = parseInt(rankTier.toString().charAt(0));
    const stars = parseInt(rankTier.toString().charAt(1));
    let rank = [];
    rank[0] = RANKS[tier-1] + " " + stars;
    rank[1] = "rank_icon_" + tier + ".png";
    if (stars != 0) {
      rank[2] = "rank_star_" + stars + ".png";
    } else {
      rank[2] = 0;
    }

    return rank[0] && rank[1] ? rank : ['', '', ''];
  }
}
