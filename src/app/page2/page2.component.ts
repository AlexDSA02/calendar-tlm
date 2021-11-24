import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  arrayNbrDay : any = [1,2,3,4,5];
  arrayNbrDay2 : any = [6,7,8,9,10];
  arrayNbrDay3 : any = [11,12,13,14,15];
  arrayNbrDay4 : any = [15,16,17,18,19];
  arrayNbrDay5 : any = [20,21,22,23,24];
  constructor() { }

  ngOnInit(): void {
  }


  test(){
    const btnDelete = document.getElementById('btnDelete');
    const modal = document.getElementById('modal');
    const blockOpacity = document.getElementById('blockOpacity');
    let t1 = gsap.timeline({defaults: { duration: 1.5}});
    t1
      .to(modal, {display: 'flex', duration: 0})
      .to(modal, {display: 'flex', duration: 0})
      .to(modal, {zIndex: 2, duration: 0})
      .to(blockOpacity, {zIndex: 0, duration: 0})
      .to(blockOpacity, {opacity: 0.8}, 0)
      .to(modal, {opacity: 1},0)
      .to(btnDelete, {display: 'block', duration: 0})


  }

  delete() {
    const btnDelete = document.getElementById('btnDelete');
    const modal = document.getElementById('modal');
    const blockOpacity = document.getElementById('blockOpacity');
    let t1 = gsap.timeline({defaults: { duration: 1.5}});
    t1
      .to(btnDelete, {display: 'none', duration: 0})
      .to(modal, {display: 'none', duration: 0})
      .to(blockOpacity, {zIndex: -1, duration: 0})
      .to(blockOpacity, {opacity: 0, duration: 0})
      .to(modal, {opacity: 0, duration: 0})
  }
}
