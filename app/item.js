"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var item_1 = require('./models/item');
var Item = (function () {
    function Item() {
        this.onGetDetails = new core_1.EventEmitter();
    }
    Item.prototype.getDetails = function (event) {
        event.preventDefault();
        this.onGetDetails.emit(this.item);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', item_1.Item)
    ], Item.prototype, "item", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Item.prototype, "onGetDetails", void 0);
    Item = __decorate([
        core_1.Component({
            selector: 'item',
            templateUrl: 'app/item.html',
            styleUrls: ['app/app.component.scss'],
        }), 
        __metadata('design:paramtypes', [])
    ], Item);
    return Item;
}());
exports.Item = Item;
//# sourceMappingURL=item.js.map