import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectionListComponent } from './protection-list.component';

describe('ProtectionListComponent', () => {
  let component: ProtectionListComponent;
  let fixture: ComponentFixture<ProtectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
