import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppareilSvcService {

  appareilSubject = new Subject<any[]>();

  private appareils = [];

  emitAppareilSubject() {
    //slice emet une copie de l'array appareils
    this.appareilSubject.next(this.appareils.slice())
  }

  constructor(private httpClient: HttpClient) {
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

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };

    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[this.appareils.length - 1].id + 1;

    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  saveAppareilsToServer() {
    this.httpClient
      .put('https://http-client-demo-eafcf.firebaseio.com/appareils.json', this.appareils)
      // pour réagir à la réponse du serveur
      .subscribe(
        () => {
          console.log('Enregistrement terminé ! ');
        },
        (error) => {
          console.log('Erreur de sauvegarde ! ' + error);
        }
      )
  }

  getAppareilsFromServer() {
    this.httpClient
      .get<any[]>('https://http-client-demo-eafcf.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur de chargement ! ' + error);
        }
      );
  }

}
