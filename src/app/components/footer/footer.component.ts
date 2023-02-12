import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  // https://stackoverflow.com/a/55252146/11986604
  copyright: number = new Date().getFullYear();

  constructor(private router: Router) {}

  hasRoute(route: string): boolean {
    return this.router.url !== route;
  }
}
