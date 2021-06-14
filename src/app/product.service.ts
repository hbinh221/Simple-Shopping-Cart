import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _url:string = "http://localhost:4200/assets/data/products.json"
  constructor(private http:HttpClient) { }
  getProduct():Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._url);
  }
}
