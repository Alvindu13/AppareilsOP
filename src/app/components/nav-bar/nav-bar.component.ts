import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy{

  secondes: number;
  counterSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const counter = Observable.interval(1000);

    this.counterSubscription = counter.subscribe(
      (value: number) => {
        this.secondes = value;
      }
    );

  }

  ngOnDestroy(): void {
    //detruit la souscription à l'observable
    this.counterSubscription.unsubscribe();
  }
}
