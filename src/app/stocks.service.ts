import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SelectedStocks } from './selectedStocks.model';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  iexURL: string = `https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_adcf19aa1218442696e130b258bc9bfb`;

  constructor(
    private http: HttpClient,
  ) { }

  getStocks(): Observable<SelectedStocks[]>{
    return this.http.get<SelectedStocks[]>(this.iexURL)
  }

  // getAllSTocks() {
  // fetch(`http://localhost:3000/stocks/add`, {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         symbol: this.local_data.symbol,
  //       }),

  //       headers: new Headers({
  //         'Content-Type': 'application/json',
  //         "Authorization": localStorage.getItem('token'),
  //       })
  //     }).then(response => response.json())
  //   }
}
