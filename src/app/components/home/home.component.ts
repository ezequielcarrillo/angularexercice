import { Profile } from '../../model/profile';
import { Conection } from '../../model/conection';
import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../../services/profiles.service'
import { LoginService } from '../../services/login.service'
import { ConectionsService } from '../../services/conections.service'
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../model/user'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProfilesService, ConectionsService, LoginService]
})
export class HomeComponent implements OnInit {

  public profiles: Profile[];
  public conections: Conection;
  public loggedUser: User;
  public query: string;
  constructor(private profilesService: ProfilesService, private ConectionsService: ConectionsService, private router: Router, private loginService: LoginService) { }

  public profilesList() {
    this.profilesService.getProfiles().subscribe(
      serviceData => this.profiles = serviceData
    );
  }

  public conectionList(id: number) {
    this.ConectionsService.getConections(id).subscribe(
      serviceData => this.conections = serviceData
    );
  }

  ngOnInit() {
    this.getLoggedUser();
    this.profilesList();
  }

  public isFriend(id: number) {
    return this.conections.friends.includes(id);
  }

  public viewProfile(id: number) {
    this.router.navigate(['/profiles/' + id]);//
  }
  public addFriend(id: number) {
    this.ConectionsService.addConection(this.conections, id).subscribe();
  }
  public unfollow(id: number) {
    this.ConectionsService.removeConection(this.conections, id).subscribe();
  }
  public getLoggedUser() {
    return this.loginService.logged().subscribe(
      serviceData => {
        this.loggedUser = serviceData
        this.conectionList(this.loggedUser.id);
      }
    );
  }

  public logout(){
    return this.loginService.logout(this.loggedUser).subscribe(
      serviceData =>{
        this.router.navigate(['/login']);
      }  
    );
  }
}
