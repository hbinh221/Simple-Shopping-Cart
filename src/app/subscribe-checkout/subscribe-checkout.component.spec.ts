import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeCheckoutComponent } from './subscribe-checkout.component';

describe('SubscribeCheckoutComponent', () => {
  let component: SubscribeCheckoutComponent;
  let fixture: ComponentFixture<SubscribeCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
