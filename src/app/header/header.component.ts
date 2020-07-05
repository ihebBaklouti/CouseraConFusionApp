import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  openLoginForm(){
   /*  this.router.navigate(['login']); */
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }

}
