import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivelihoodsComponent } from './livelihoods.component';

describe('LivelihoodsComponent', () => {
  let component: LivelihoodsComponent;
  let fixture: ComponentFixture<LivelihoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivelihoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivelihoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
