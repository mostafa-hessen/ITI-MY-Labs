import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCartElementComponent } from './my-cart-element.component';

describe('MyCartElementComponent', () => {
  let component: MyCartElementComponent;
  let fixture: ComponentFixture<MyCartElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCartElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCartElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
