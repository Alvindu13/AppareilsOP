import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../models/User.model';
import {UserService} from '../../services/user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: any[];
  userSubscription: Subscription;



  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: any[]) => {
        this.users = users;
      }
    );
    //permet d'emmettre la copie du service
    this.userService.emitUsers();
  }


  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
