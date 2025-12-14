import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

declare var feather: any;

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Initialize Feather icons after view init
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }

  scrollToService(serviceType: string) {
    // This method will scroll to the specific service on the gallery page
    // For now, we'll just navigate to gallery and let the user find the service
    console.debug(`Navigating to service: ${serviceType}`);
  }
}
