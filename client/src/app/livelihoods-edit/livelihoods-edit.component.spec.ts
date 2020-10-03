import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivelihoodsEditComponent } from './livelihoods-edit.component';

describe('LivelihoodsEditComponent', () => {
  let component: LivelihoodsEditComponent;
  let fixture: ComponentFixture<LivelihoodsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LivelihoodsEditComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivelihoodsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
