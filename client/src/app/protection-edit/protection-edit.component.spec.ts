import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectionEditComponent } from './protection-edit.component';

describe('ProtectionEditComponent', () => {
  let component: ProtectionEditComponent;
  let fixture: ComponentFixture<ProtectionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
