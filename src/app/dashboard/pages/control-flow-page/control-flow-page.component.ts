import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A'|'B'|'C'|'D'|'F';

@Component({
  standalone: true,
  imports: [
    TitleComponent,
  ],
  templateUrl: './control-flow-page.component.html',
  styles: ``
})
export default class ControlFlowPageComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('C');
  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwik']);
  public frameworks2 = signal([]);

  toggleContent() {
    this.showContent.update(value => !value);
  }

}
