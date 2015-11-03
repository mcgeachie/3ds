import {Component, NgFor} from 'angular2/angular2';
import {Dee} from './d';

var Deez: Dee[] = [
  { color: 'rgba(13, 71, 161, 1)' },
  { color: 'rgba(25, 118, 210, 1)' },
  { color: 'rgba(33, 150, 243, 1)' }
];

@Component({
  directives: [NgFor],
  selector: 'design-container',
  styleUrls: ['app/styles/design.css'],
  template: `
    <div class="container">
      <div *ng-for="#layer of deez" class="dee" [style.background]="layer.color"></div>
      <div class="dee mask" [style.background]="background"></div>
    </div>
  `
})
export class DesignContainer {
  public deez = Deez;
  public background = '#FFF';
}
