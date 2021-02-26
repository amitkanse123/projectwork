import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Demo } from './shop/demo';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  private url="assets/data/product.json";

  constructor(private http:HttpClient) { }

  getdata()
  {
return this.http.get(this.url);
  }

}
