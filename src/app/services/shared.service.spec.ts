import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should add new item to the cart',()=>{
    const item = {id:1,name:'Test'};
    service.addToCart(item);
    service.getAllItems().subscribe(items=>{
      expect(items.length).toBe(1);
      expect(items[0].id).toBe(item.id);
      expect(items[0].quantity).toBe(1);
    })
  })
  it('should change the quantity when added',()=>{
    const item={id:1,name:'test'};
    service.addToCart(item);
    service.addToCart(item);
    service.getAllItems().subscribe(items=>{
      expect(items.length).toBe(1);
      expect(items[0].quantity).toBe(2);
    })
  })
  it('should remove an item',()=>{
    const item1={id:1,name:'test'}
    const item2={id:2,name:'test'}
    service.addToCart(item1);
    service.addToCart(item2);
    service.removeItem(item1.id);
    service.getAllItems().subscribe(items=>{
      expect(items.length).toBe(1);
      expect(items[0].id).toBe(item2.id);
    })
  })
 
});
