import {Component, NgFor} from 'angular2/angular2';
import {Dee} from './d';
import {Layer} from './layer';

var Deez: Dee[] = [
  { position: 'outer', color: 'rgb(13, 71, 161)' },
  { position: 'middle', color: 'rgb(25, 118, 210)' },
  { position: 'inner', color: 'rgb(33, 150, 243)' }
];

@Component({
  directives: [NgFor, Layer],
  selector: 'design',
  styleUrls: ['app/styles/design.css'],
  template: `
    <div class="container">
      <layer *ng-for="#layer of deez" class="layer" [model]="layer"></layer>
      <span class="mask" [style.background]="background"></span>
    </div>
  `
})
export class Design {
  public deez = Deez;
  public background = '#FFF';
}
