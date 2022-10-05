import { Component, OnInit } from '@angular/core';
import { toggleContent, toggleSideNavButton, toggleSideNavContent, toggleSideNav } from '../../shared/animation/mat-sidenav.animation';
import { MatSidenavService } from '../../shared/service/mat-sidenav.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: [ './secure.component.css' ],
  animations: [ toggleSideNavButton, toggleSideNavContent, toggleSideNav, toggleContent ]
})
export class SecureComponent implements OnInit {

  constructor(public matSidenavService:  MatSidenavService) {}

  ngOnInit(): void {}

}
