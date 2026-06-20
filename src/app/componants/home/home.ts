import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Hero } from '../hero/hero';
import { RouterOutlet } from '@angular/router';
import { Features } from '../features/features';
import { Challenges } from '../challenges/challenges';
import { Achievements } from '../achievements/achievements';
import { OurTeam } from '../our-team/our-team';
import { Contact } from '../contact/contact';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [Navbar,Hero,Features,Challenges,Achievements,OurTeam,Contact,RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
