import { Profile } from './../../model/profile';
import { ProfilesService } from './../../services/profiles.service';
import { Publication } from '../../model/publication';
import { PublicationsService } from './../../services/publications.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Conection } from '../../model/conection';
import { ConectionsService } from '../../services/conections.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'],
  providers: [PublicationsService,ConectionsService,ProfilesService]
})
export class ProfilesComponent implements OnInit {
  public profile_id: any;
  public publications: Publication[];
  public conection: Conection;
  public profile: Profile;

  constructor(private activatedRoute: ActivatedRoute, private publicationsService: PublicationsService, private conectionsService: ConectionsService, private profilesService: ProfilesService) { }

  public getPublication() {
    this.publicationsService.getPublications(this.profile_id).subscribe(
      serviceData => this.publications = serviceData
    );
  }

  public getProfile() {
    this.profilesService.getProfile(this.profile_id).subscribe(
      serviceData => this.profile = serviceData
    );
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: Params) => {
      this.profile_id = params.get("id")
    });
    this.getPublication();
    this.getProfile(); 
  }

  public like(publication: Publication) {
    this.publicationsService.likePublications(publication).subscribe();
  }

}

