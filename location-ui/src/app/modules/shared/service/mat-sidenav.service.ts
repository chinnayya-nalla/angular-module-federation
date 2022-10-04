import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class MatSidenavService {
  
  public linkText: boolean = true;
  public sideNavState: boolean = true;
  public sideNavState$: Subject<boolean> = new Subject();
  
  constructor() {}

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState;

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200);
    this.sideNavState$.next(this.sideNavState);
  }

}
