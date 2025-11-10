import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

declare var feather: any;

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent implements AfterViewInit {
  currentYear = new Date().getFullYear();

  ngAfterViewInit() {
    // Initialize Feather icons after view init
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }
}
