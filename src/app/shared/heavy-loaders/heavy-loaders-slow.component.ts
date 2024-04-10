import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'shared-heavy-loader-slow',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
  ],
  template: `
<section [ngClass]="['h-[600px] w-full', cssClass]">
  <shared-title title="Heavy Loader Slow Works!!" />
</section>
  `,
  styles: ``
})
export class HeavyLoaderSlowComponent {

  @Input({required: true}) cssClass!: string;

  constructor() {
    const start = Date.now();

    while (Date.now() - start < 3000) { };

    console.log('Loaded');

  }

}
