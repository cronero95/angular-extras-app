import { Component, signal } from '@angular/core';

type Grade = 'A'|'B'|'C'|'D'|'F';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './control-flow-page.component.html',
  styles: ``
})
export default class ControlFlowPageComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('A');

  toggleContent() {
    this.showContent.update(value => !value);
  }

}
