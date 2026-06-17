import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Hero } from '../hero/hero';
import { RouterOutlet } from '@angular/router';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [Navbar,Hero,RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
