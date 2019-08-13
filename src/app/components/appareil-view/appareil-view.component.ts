import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppareilSvcService} from '../../services/appareil-svc.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit, OnDestroy  {

  isAuth = false;
  appareils: any[];
  appareilSubscription: Subscription;


  constructor(private appareilService: AppareilSvcService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    //permet d'emmettre la copie du service
    this.appareilService.emitAppareilSubject()
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

  ngOnDestroy(): void {
    this.appareilSubscription.unsubscribe();
  }
}
