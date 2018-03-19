import { Component, OnInit } from '@angular/core';
import { User } from '../dataobject/user';
import { ActivatedRoute, Router } from '@angular/router';
import { IdleTimeoutService } from '../service/idle-timeout.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.scss']
})
export class UserControlComponent implements OnInit {

  private _idleTimerSubscription: any;

  constructor(private router: Router,
              private idleTimeoutSvc:IdleTimeoutService) { }

  ngOnInit() {
    let strUser: string = localStorage.getItem('user');
    alert(strUser);
    if (strUser == null || strUser == '') {
      this.router.navigate(['/login']);
    } else {
      let user: User = <User>JSON.parse(strUser);
      if (user.authenticated == false) {
        this.router.navigate(['/login']);
      }
    }

    this.startIdleMonitoring();
  }


  startIdleMonitoring() {
    this.idleTimeoutSvc.setTimeOut(30);
    this.idleTimeoutSvc.startTimer();
    this._idleTimerSubscription = this.idleTimeoutSvc.timeoutExpired.subscribe(res => {
      alert("Your session is about to expire. Do you need more time?");
      /*
      var modalPromise = this.dialogSvc.open("Session Expiring!", "Your session is about to expire. Do you need more time?",
          true, "Yes", "No");
      var newObservable = Observable.fromPromise(modalPromise);
      newObservable.subscribe(
          (res) => {
              if (res === true) {
                  console.log("Extending session...");
                  this._status = "Session was extended.";
                  this.idleTimeoutSvc.resetTimer();
                  this.startCounter();
                  this.changeRef.markForCheck();
                   
              } else {
                  console.log("Not extending session...");
                  this._status = "Session was not extended.";
                  this.changeRef.markForCheck();
              }
          },
          (reason) => {
              console.log("Dismissed " + reason);
              this._status = "Session was not extended.";
              this.changeRef.markForCheck();
          }
      );*/
    });
  }


  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
