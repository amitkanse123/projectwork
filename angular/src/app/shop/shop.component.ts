import { Component, OnInit,ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { FetchService } from '../fetch.service';
import { Demo } from './demo';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  user:any;
Categoryname='';
filter:any;
p: number = 1;
  

  constructor(private service:FetchService) { }

  ngOnInit(): void {
this.service.getdata().subscribe(data=>
  {
    this.user=data;
  }
  
  )
  
  }
  key: string = 'name'; 
  reverse: boolean = false;
  sort(key: string){
    this.key = key;
    this.reverse = !this.reverse;
  }
}


