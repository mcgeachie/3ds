var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var design_container_1 = require('./components/design-container');
var strapline_1 = require('./components/strapline');
var BrandingComponent = (function () {
    function BrandingComponent() {
    }
    BrandingComponent = __decorate([
        angular2_1.Component({
            directives: [design_container_1.DesignContainer, strapline_1.Title],
            selector: 'branding',
            template: "\n    <design-container>Loading...</design-container>\n    <strapline></strapline>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], BrandingComponent);
    return BrandingComponent;
})();
angular2_1.bootstrap(BrandingComponent);
//# sourceMappingURL=app.js.map