import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection-page.component.html',
  styles: ``
})
export default class ChangeDetectionPageComponent {

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public currentFramework = computed(() => `Change Detection - ${this.frameworkAsSignal().name}`);

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {

      this.frameworkAsSignal.update(value => {
        value.name = 'React';
        return {...value};
      })

      console.log('done');
    }, 3000);
  }

}
