import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivelihoodsListComponent } from './livelihoods-list.component';

describe('LivelihoodsListComponent', () => {
  let component: LivelihoodsListComponent;
  let fixture: ComponentFixture<LivelihoodsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivelihoodsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivelihoodsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
