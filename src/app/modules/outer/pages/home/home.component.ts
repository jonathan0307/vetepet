import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

declare var feather: any;

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Initialize Feather icons after view init
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }
}
