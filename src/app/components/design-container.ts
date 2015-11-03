import {Component, NgFor} from 'angular2/angular2';
import {Dee} from './d';

var Deez: Dee[] = [
  { color: 'rgb(13, 71, 161)' },
  { color: 'rgb(25, 118, 210)' },
  { color: 'rgb(33, 150, 243)' }
];

@Component({
  directives: [NgFor],
  selector: 'design-container',
  styleUrls: ['app/styles/design.css'],
  template: `
    <div class="container">
      <div *ng-for="#layer of deez" class="dee" [style.background]="layer.color" [title]="layer.color"></div>
      <div class="dee mask" [style.background]="background"></div>
    </div>
  `
})
export class DesignContainer {
  public deez = Deez;
  public background = '#FFF';
}
