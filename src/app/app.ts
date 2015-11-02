import {Component, bootstrap, NgFor} from 'angular2/angular2';
import {DesignContainer} from './components/design-container';
import {Title} from './components/strapline';

@Component({
  directives: [DesignContainer, Title],
  selector: 'branding',
  template: `
    <design-container>Loading...</design-container>
    <strapline></strapline>
  `
})
class BrandingComponent { }

bootstrap(BrandingComponent);
