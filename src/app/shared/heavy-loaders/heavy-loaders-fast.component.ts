import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'shared-heavy-loader-fast',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
  ],
  template: `
<section [ngClass]="['w-full', cssClass]">
  <ng-content />
</section>
  `,
  styles: ``
})
export class HeavyLoaderFastComponent {

  @Input({required: true}) cssClass!: string;

}
