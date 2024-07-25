import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './app/navbar/navbar.component';
import { VideosSectionComponent } from './app/videos-section/videos-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, VideosSectionComponent],
  template: `
    <app-navbar></app-navbar>
    <app-videos-section></app-videos-section>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideAnimationsAsync()],
});
