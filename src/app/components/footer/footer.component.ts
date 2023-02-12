import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  // https://stackoverflow.com/a/55252146/11986604
  copyright: number = new Date().getFullYear();
}
