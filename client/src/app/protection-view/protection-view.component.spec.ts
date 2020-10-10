import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectionViewComponent } from './protection-view.component';

describe('ProtectionViewComponent', () => {
  let component: ProtectionViewComponent;
  let fixture: ComponentFixture<ProtectionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
