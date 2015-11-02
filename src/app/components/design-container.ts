import {Component, NgFor} from 'angular2/angular2';
import {Dee} from './d';

var Deez: Dee[] = [
  { klass: 'outer', color: '#0D47A1' },
  { klass: 'middle', color: '#1976D2' },
  { klass: 'inner', color: '#2196F3' }
];

@Component({
  directives: [NgFor],
  selector: 'design-container',
  styleUrls: ['app/styles/design.css'],
  template: `
    <div class="container">
      <div *ng-for="#layer of deez" class="dee {{layer.klass}}" [style.background]="layer.color"></div>
      <div class="dee mask" [style.background]="background"></div>
    </div>
  `
})
export class DesignContainer {
  public deez = Deez;
  public background = '#FFF';
}
