import {Component, NgFor} from 'angular2/angular2';

@Component({
  selector: 'strapline',
  styleUrls: [
    'https://fonts.googleapis.com/css?family=Source+Code+Pro',
    'app/styles/strapline.css'
  ],
  template: '<p class="strapline">{{title}}</p>'
})
export class Title {
  public title = 'Daily Developer Dashboard';
}
