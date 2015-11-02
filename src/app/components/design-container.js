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
var Deez = [
    { klass: 'outer', color: '#0D47A1' },
    { klass: 'middle', color: '#1976D2' },
    { klass: 'inner', color: '#2196F3' }
];
var DesignContainer = (function () {
    function DesignContainer() {
        this.deez = Deez;
        this.background = '#FFF';
    }
    DesignContainer = __decorate([
        angular2_1.Component({
            directives: [angular2_1.NgFor],
            selector: 'design-container',
            styleUrls: ['app/styles/design.css'],
            template: "\n    <div class=\"container\">\n      <div *ng-for=\"#layer of deez\" class=\"dee {{layer.klass}}\" [style.background]=\"layer.color\"></div>\n      <div class=\"dee mask\" [style.background]=\"background\"></div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], DesignContainer);
    return DesignContainer;
})();
exports.DesignContainer = DesignContainer;
//# sourceMappingURL=design-container.js.map