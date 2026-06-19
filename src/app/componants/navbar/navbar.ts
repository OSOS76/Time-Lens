import { Component } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { routes } from '../../app.routes';



@Component({
  selector: 'app-navbar',
  imports: [RouterModule,RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {}
