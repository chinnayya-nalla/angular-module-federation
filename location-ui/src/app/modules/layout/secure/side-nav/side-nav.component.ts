import { Component, OnInit } from '@angular/core';
import { toggleContent, toggleSideNav } from 'src/app/modules/shared/animation/mat-sidenav.animation';
import { MatSidenavService } from 'src/app/modules/shared/service/mat-sidenav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  animations: [ toggleSideNav, toggleContent ]
})
export class SideNavComponent implements OnInit {

  constructor(public matSidenavService:  MatSidenavService) {}

  ngOnInit(): void {}

}
