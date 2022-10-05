import { Component, OnInit } from '@angular/core';
import { animateText, onCollapseBtnChange, onMainContentChange, onSideNavChange } from '../../shared/animation/mat-sidenav.animation';
import { MatSidenavService } from '../../shared/service/mat-sidenav.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: [ './secure.component.css' ],
  animations: [ onCollapseBtnChange, onMainContentChange, onSideNavChange, animateText ]
})
export class SecureComponent implements OnInit {

  constructor(public matSidenavService:  MatSidenavService) {}

  ngOnInit(): void {}

}
