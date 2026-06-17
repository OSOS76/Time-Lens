import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./componants/navbar/navbar";
import { Hero } from "./componants/hero/hero";
import { Home } from './componants/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TimeLens');
}
