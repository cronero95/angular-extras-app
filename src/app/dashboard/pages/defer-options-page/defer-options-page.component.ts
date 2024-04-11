import { Component } from '@angular/core';
import { HeavyLoaderFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [
    TitleComponent,
    HeavyLoaderFastComponent,
  ],
  templateUrl: './defer-options-page.component.html',
  styles: ``
})
export default class DeferOptionsPageComponent {

}
