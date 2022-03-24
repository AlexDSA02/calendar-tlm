import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oclock',
  templateUrl: './oclock.component.html',
  styleUrls: ['./oclock.component.css']
})




export class OclockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    interface IUtilisateur {
      DisplayUtilisateur():void;
    }

    class Client implements IUtilisateur
    {
      _nom : string;

      constructor(nom: string) {
        this._nom = nom
      }

      DisplayUtilisateur()
      {
        console.log("Nom du client : ", this._nom)
      }
    }

    class Employe
    {
      _nom : string;
      _poste : string;

      constructor(nom: string, poste: string)
      {
        this._nom = nom;
        this._poste = poste;
      }
      AfficherNom()
      {
        console.log("Nom de l'employé : ", this._nom);
      }
      AfficherPoste()
      {
        console.log("-> Poste actuel : ", this._poste);
      }
    }

    class EmployeAdapter implements IUtilisateur
    {
      _employe : Employe;

      constructor(employe : Employe)
      {
        this._employe = employe;
      }
      DisplayUtilisateur()
      {
        this._employe.AfficherNom();
        this._employe.AfficherPoste();
      }
    }
    let test1 = new Client('Descarte')
    let test2 = new Employe('Freud', 'Mise en rayon')
    let test3 = new EmployeAdapter(test2)
    test1.DisplayUtilisateur()
    test3.DisplayUtilisateur()

  }

}
