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
  snow_animation_y = gsap.timeline({defaults: {duration : 15, repeat: -1, ease: 'linear'}});
  snow_animation_x = gsap.timeline({defaults: {duration : 20, ease: 'cubic-bezier(.17,.67,.83,.67)'}});
  constructor() { }

  ngOnInit(): void {
    let snow_small = document.getElementsByClassName('snow_small')
    let snow_large = document.getElementsByClassName('snow_large')
    let snow_medium = document.getElementsByClassName('snow_medium')
    this.snow_animation_y
      .to(snow_small,{y  : 1000}, 0)
      .to(snow_medium,{y  :1000, duration: 6}, 0)
      .to(snow_large,{y  :1000, duration: 25}, 0)
    this.snow_animation_x
      .to(snow_small,{x  : 150})
      .to(snow_small,{x  : 0})
    this.snow_animation_x.repeat(-1)
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
