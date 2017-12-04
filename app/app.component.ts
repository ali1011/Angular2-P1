import { Component } from "@angular/core";
import {Item} from './models/item';
import { Config } from "./models/config";
import {Item as ItemComponent } from './item';
import { ItemFormComponent } from "./item.from";
import { ItemPipe } from "./models/pipes/item.filter";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.scss'],
    directives:[ItemComponent, ItemFormComponent], // sous component
    pipes: [ItemPipe]

})
export class appComponent {
    private title: string;
    private version: string;
    private collection: [Item];
  

    constructor() {
        this.title = Config.App_TITLE;
        this.version = Config.App_VERSION;
        this.collection = [
            new Item({ reference: '123', name: 'thomas', state: 0 }),
            new Item({ reference: '456', name: 'gabriel', state: 1 }),
            new Item({ reference: '789', name: 'elodie', state: 2 })
        ];

         
    }


    /*getDetails(event:Event, param){
        event.preventDefault();
        let element=event.target || event.currentTarget || event.srcElement;
        //console.log(element.attributes.id);
        console.log(param);
    }*/
    OnGetDetailsApp(item){
        console.log(item);
    }

    OnCreateObjectApp(item){
       this.collection.push(item); 
    }

}