import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppareilSvcService {

  appareilSubject = new Subject<any[]>();

  private appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  emitAppareilSubject() {
    //slice emet une copie de l'array appareils
    this.appareilSubject.next(this.appareils.slice())
  }

  constructor() {
  }

  getAppareilById(id: number){
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }

  switchOnAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    this.emitAppareilSubject()
  }

  switchOffAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject()
  }

  switchOnOne(i: number) {

    this.appareils[i].status = 'allumé';
    this.emitAppareilSubject()

  }

  switchOffOne(i: number) {

    this.appareils[i].status = 'éteint';
    this.emitAppareilSubject()
  }

}
