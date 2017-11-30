import {Component, OnInit} from '@angular/core';
import {AppService} from '../Services/app-service.service';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean;
  userEmail: string;

  constructor(private appService: AppService,  private serviceUser: UserService) {
    this.isMenuOpen = false;
    //this.userEmail = localStorage.getItem('email');
  }

  ngOnInit() {
    //this.serviceUser.setEmail(this.userEmail); 
    this.getIsMenuOpen();
  }

  getIsMenuOpen(): void {
    this.appService.getIsMenuOpen().subscribe(isMenuOpen => {
      console.log('HEADER getIsMenuOpen: ' + isMenuOpen);
      this.isMenuOpen = isMenuOpen;
    });
  }

  menuClicked() {
    this.appService.setIsMenuOpen(!this.isMenuOpen);
  }
}
