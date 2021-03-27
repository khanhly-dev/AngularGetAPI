import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Product } from './productViewModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const ApiUrl = "https://605c56316d85de00170d9eb0.mockapi.io/product"
const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(
    private http: HttpClient) { }

  //get all product
  GetAllProduct(): Observable<Product[]>
  {
    return this.http.get<Product[]>(ApiUrl).pipe()
  }

  //get by id

  //POST

  //PUT

  //DELETE
}
