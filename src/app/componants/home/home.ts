import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Hero } from '../hero/hero';
import { RouterOutlet } from '@angular/router';
import { Features } from '../features/features';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [Navbar,Hero,Features,RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
