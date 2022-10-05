import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class MatSidenavService implements OnInit {
  

  public state: boolean = true;
  public sideNavState: boolean = true;
  public sideNav$: Subject<boolean> = new Subject();
  
  constructor() {}

  ngOnInit(): void {
    this.sideNav$.subscribe((result) => {
      this.state = result;
    });
  }

  public toogle() {
    this.state = !this.state;

    setTimeout(() => {
      this.sideNavState = this.state;
    }, 200);
    this.sideNav$.next(this.state);
  }

}
