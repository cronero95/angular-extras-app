import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [
    TitleComponent,
  ],
  template: `
  <shared-title title="View Transition 1"/>
  <section class="flex justify-start">

    <img
      srcset="https://picsum.photos/id/237/200/300"
      alt="A black dog"
      width="200"
      height="300"
      style="view-transition-name: hero-1"
    >

    <div
      class="bg-blue-500 w-56 h-56"
      style="view-transition-name: hero-2"
    ></div>

  </section>
  `,
  styles: ``
})
export default class ViewTransitionPageComponent {

}
