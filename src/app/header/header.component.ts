import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog:MatDialog) { } //dialog is a service that open a dialog with width 500 and height 400

  ngOnInit()
   {
   }
  openLoginForm() 
  {
    this.dialog.open(LoginComponent, {width: '500px', height: '400px'});
  }
}
