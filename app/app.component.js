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
var core_1 = require("@angular/core");
var item_1 = require('./models/item');
var config_1 = require("./models/config");
var item_2 = require('./item');
var item_from_1 = require("./item.from");
var item_filter_1 = require("./models/pipes/item.filter");
var appComponent = (function () {
    function appComponent() {
        this.title = config_1.Config.App_TITLE;
        this.version = config_1.Config.App_VERSION;
        this.collection = [
            new item_1.Item({ reference: '123', name: 'thomas', state: 0 }),
            new item_1.Item({ reference: '456', name: 'gabriel', state: 1 }),
            new item_1.Item({ reference: '789', name: 'elodie', state: 2 })
        ];
    }
    /*getDetails(event:Event, param){
        event.preventDefault();
        let element=event.target || event.currentTarget || event.srcElement;
        //console.log(element.attributes.id);
        console.log(param);
    }*/
    appComponent.prototype.OnGetDetailsApp = function (item) {
        console.log(item);
    };
    appComponent.prototype.OnCreateObjectApp = function (item) {
        this.collection.push(item);
    };
    appComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.scss'],
            directives: [item_2.Item, item_from_1.ItemFormComponent],
            pipes: [item_filter_1.ItemPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], appComponent);
    return appComponent;
}());
exports.appComponent = appComponent;
//# sourceMappingURL=app.component.js.map