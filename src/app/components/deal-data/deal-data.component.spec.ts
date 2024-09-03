/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DealDataComponent } from './deal-data.component';

describe('DealDataComponent', () => {
  let component: DealDataComponent;
  let fixture: ComponentFixture<DealDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
