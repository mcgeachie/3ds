import {Component, bootstrap, NgFor} from 'angular2/angular2';
import {Design} from './components/design-container';
import {Title} from './components/strapline';

@Component({
  directives: [Design, Title],
  selector: 'branding',
  template: `
    <design>Loading...</design>
    <strapline></strapline>
  `
})
class BrandingComponent { }

bootstrap(BrandingComponent);
