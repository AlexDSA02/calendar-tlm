import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-of-life',
  templateUrl: './game-of-life.component.html',
  styleUrls: ['./game-of-life.component.css']
})
export class GameOfLifeComponent implements OnInit {

  constructor() { }
  blue = 'blue'
  nbrLigneColonne = 40
  speed = 50
  nbrLigneArray = [] as any
  test = [] as any
  oldTable = [] as any
  sizeBox: string | undefined;
  async ngOnInit(): Promise<void> {
    this.sizeBox = 100/this.nbrLigneColonne + '%'
    for (let i = 0 ; i < this.nbrLigneColonne ; i++) {
      this.test[i] = []
      this.oldTable[i] = []
      this.nbrLigneArray[i] = i
      for (let j = 0 ; j < this.nbrLigneColonne ; j++) {
        this.test[i][j] = 0
        this.oldTable[i][j] = 0
      }
    }
    this.oldTable[0][0] = 30

  }

  testClick(i: number, j: number) {
    if (this.test[i][j] === 1){
      this.test[i][j] = 0
    }
    else {
      this.test[i][j] = 1
    }

  }

  async getValueCase(row: number, col: number, table: any): Promise<number>{
    if (row>-1 && row <this.nbrLigneColonne && col>-1 && col <this.nbrLigneColonne){
      return await table[row][col]
    }
    else{
      return 0
    }
    };

  updateCellValue(row: number, col: number, newValue: number){
    this.test[row][col] = newValue
  }


  async countNeighbours(row: number, col: number, table: any): Promise<number>{
    let total_neighbours = 0;
    total_neighbours += await this.getValueCase(row - 1, col - 1, table);
    total_neighbours += await this.getValueCase(row - 1, col, table);
    total_neighbours += await this.getValueCase(row - 1, col + 1, table);
    total_neighbours += await this.getValueCase(row, col - 1, table);
    total_neighbours += await this.getValueCase(row, col + 1, table);
    total_neighbours += await this.getValueCase(row + 1, col - 1, table);
    total_neighbours += await this.getValueCase(row + 1, col, table);
    total_neighbours += await this.getValueCase(row + 1, col + 1, table);
    return total_neighbours;
  }

  cloneTab(){
    for (const i of this.nbrLigneArray) {
      for (const j of this.nbrLigneArray) {
        this.oldTable[i][j] = this.test[i][j]
      }
    }
  }


  async doCycle(){
    await this.cloneTab()
    let counti = 0
    let countj = 0
    let nbrNeighbours = 0
    for await (const i of this.nbrLigneArray) {
      for await (const j of this.nbrLigneArray) {
        nbrNeighbours = await this.countNeighbours(i, j, this.oldTable)
        if (this.oldTable[i][j] === 0) {
          if (nbrNeighbours === 3) {
            await this.updateCellValue(i, j, 1)
          }
        } else {
          if (nbrNeighbours !== 3 && nbrNeighbours !== 2) {
            await this.updateCellValue(i, j, 0)
          }
        }
      }
    }
  }
  async startGame(){
      window.setInterval(()=> this.doCycle(), this.speed)
  }

  sizeBoxDefine(event: any) {
    this.speed = event.value
  }
}
