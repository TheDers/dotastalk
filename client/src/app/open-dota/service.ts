import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs/observable/forkJoin';
import {isNil} from 'lodash';
const URL = 'https://api.opendota.com/api/players/';
const RANKS = ["Herald", "Guardian", "Crusader", "Archon", "Legend", "Ancient", "Divine"];

@Injectable()
export class OpenDotaService {
  constructor(private http: HttpClient) {}

  public getData(ids): Observable<any> {
    return forkJoin(ids.map(id => this.http.get(`${URL}${id}`)))
  }


  public getRank(rankTier:any): string[] {
    const rankInt = isNil(rankTier)
      ? ['1','0']
      : rankTier.toString().split('');

    let rank = [];
    rank[0] = `${RANKS[rankInt[0] - 1]} ${rankInt[1]}`;
    rank[1] = `rank_icon_${rankInt[0]}.png`;
    if (rankInt[1] !== '0') {
      rank[2] = `rank_star_${rankInt[1]}.png`;
    } else {
      rank[2] = 'rank_star_1.png';
    }
    return rank;
  }
}
