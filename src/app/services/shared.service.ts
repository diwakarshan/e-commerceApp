import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private itemSource = new BehaviorSubject<any[]>([]);
  items$ = this.itemSource.asObservable();
  constructor() { }

  public addToCart(obj:any):void{
    const currentItems=this.itemSource.getValue();
    const itemIndex=currentItems.findIndex(item=>item.id===obj.id);
    if(itemIndex>-1){
      currentItems[itemIndex].quantity=(currentItems[itemIndex].quantity||1)+1;
    }
    else{
      obj.quantity=1;
      currentItems.push(obj);
    }

    this.itemSource.next([...currentItems]);
  }
  public removeItem(id:number){
    const currentItems= this.itemSource.getValue();
    const index=currentItems.findIndex(item=>item.id===id);
    if(index>-1){
      currentItems.splice(index,1);
      this.itemSource.next([...currentItems]);
    }
  }
  public getAllItems(){
    return this.items$;
  }
}
