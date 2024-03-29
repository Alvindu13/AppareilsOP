import { Component, OnInit } from '@angular/core';
import {AppareilSvcService} from '../../services/appareil-svc.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit {

  name = 'Appareil';
  status = 'Statut';

  constructor(private appareilService: AppareilSvcService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(+id).name;
  }

}
