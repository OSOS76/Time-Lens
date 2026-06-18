import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Hero } from '../hero/hero';
import { RouterOutlet } from '@angular/router';
import { Features } from '../features/features';
import { Challenges } from '../challenges/challenges';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [Navbar,Hero,Features,Challenges,RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
