import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bepanda-jouney',
  templateUrl: './bepanda-jouney.component.html',
  styleUrls: ['./bepanda-jouney.component.scss']
})
export class BepandaJouneyComponent implements OnInit {
  case1: string = 'Lille, Paris'
  case2: string = 'Lille, Compiègne, Paris'
  case4: string = 'Lille, Arras, Paris'
  case3: string = 'Lille, Arras, Compiègne, Paris'
  time: number = 0
  minSelected: number = 0
  hourSelected: number = 0
  moneySelected: number = 0
  caseTimeArray: string[] = []
  caseMoneyArray: string[] = []
  caseFinal: string[] = []
  response: any = []
  //case4: string = 'Lille -> Arras -> Compiegne -> Paris / Lille -> Compiegne -> Arras -> Paris'
  constructor() { }

  ngOnInit(): void {
    let array1 = ["cat", "sum","fun", "run"];
    let array2 = ["bat", "cat","dog","sun", "hut", "gut"];
    const intersection = array1.filter(element => array2.includes(element));

  }

  changeHour(value: string) {
    this.hourSelected = +value
    this.updateResponse()
  }

  changeMin(value: string) {
    this.minSelected = +value
    this.updateResponse()
  }

  changeMoney(value: string) {
    this.moneySelected = +value
    this.updateResponse()
  }

  updateResponse(){
    this.time = (this.hourSelected * 60) + this.minSelected
    switch (true){
      case (this.time<180):
        this.caseTimeArray = []
        break
      case (this.time>=180 && this.time<210):
        this.caseTimeArray = [this.case1]
        break
      case (this.time>=210 && this.time<240):
        this.caseTimeArray = [this.case1, this.case2, this.case4]
        break
      case (this.time>=240):
        this.caseTimeArray = [this.case1, this.case2, this.case4, this.case3]
        break
    }

    switch (true){
      case (this.moneySelected<6):
        this.caseMoneyArray = []
        break
      case (this.moneySelected>=6 && this.moneySelected<8):
        this.caseMoneyArray = [this.case3]
        break
      case (this.moneySelected>=8 && this.moneySelected<10):
        this.caseMoneyArray = [this.case3, this.case2, this.case4]
        break
      case (this.moneySelected>=10):
        this.caseMoneyArray = [this.case1, this.case2, this.case4, this.case3]
        break
    }

    this.caseFinal = this.caseTimeArray.filter(element => this.caseMoneyArray.includes(element));

    console.log(this.caseTimeArray)
    console.log(this.caseMoneyArray)
    console.log('WAWAWA', this.caseFinal)
  }

  clickResponse() {
    this.response = this.caseFinal
    if (this.caseFinal.length === 0){
      this.response.push('Aucune route possible')
    }
    console.log(this.response)
  }
}
