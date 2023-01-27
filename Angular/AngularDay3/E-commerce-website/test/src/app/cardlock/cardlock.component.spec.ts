import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardlockComponent } from './cardlock.component';

describe('CardlockComponent', () => {
  let component: CardlockComponent;
  let fixture: ComponentFixture<CardlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
