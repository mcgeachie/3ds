import {Component, Input} from 'angular2/angular2';

@Component({
  selector: 'layer',
  styleUrls: ['app/styles/layer.css'],
  template: '<span class="d {{model.position}}" [style.background]="model.color" [title]="model.color"></span>'
})
export class Layer {
  @Input() model;
}
