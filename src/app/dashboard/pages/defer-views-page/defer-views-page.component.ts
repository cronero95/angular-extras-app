import { Component } from '@angular/core';
import { HeavyLoaderSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [
    HeavyLoaderSlowComponent,
    TitleComponent,
  ],
  templateUrl: './defer-views-page.component.html',
  styles: ``
})
export default class DeferViewsPageComponent {

}
