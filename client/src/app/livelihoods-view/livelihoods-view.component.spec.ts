import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivelihoodsViewComponent } from './livelihoods-view.component';

describe('LivelihoodsViewComponent', () => {
  let component: LivelihoodsViewComponent;
  let fixture: ComponentFixture<LivelihoodsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivelihoodsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivelihoodsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
