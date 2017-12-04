import { Component,Output, EventEmitter} from '@angular/core';
import {Item as ItemModel} from './models/item';

@Component({
    selector: 'itemForm',
    templateUrl: 'app/item.form.html'
})

export class ItemFormComponent {
    private newItem : ItemModel;
    @Output() onCreateObject= new EventEmitter() ;
    constructor() { 
        this.resetNewItem(); 
     }
    createObject(){
        this.onCreateObject.emit(this.newItem);
        this.resetNewItem(); 

    }
    resetNewItem(){
        this.newItem=new ItemModel({reference :'',name:'',state :0});
    }
   
}