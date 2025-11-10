import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Header from '../components/header';

@Component({
  selector: 'app-page-layout',
  imports: [RouterOutlet, Header],
  template: `
    <app-header />
    <main>
      <div class="container">
        <router-outlet />
      </div>
    </main>
  `,
})
export default class PageLayout {}
