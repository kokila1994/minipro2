import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeffenceComponent } from './deffence.component';

describe('DeffenceComponent', () => {
  let component: DeffenceComponent;
  let fixture: ComponentFixture<DeffenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeffenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeffenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
