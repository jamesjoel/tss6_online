import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo3MiniComponent } from './demo3-mini.component';

describe('Demo3MiniComponent', () => {
  let component: Demo3MiniComponent;
  let fixture: ComponentFixture<Demo3MiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo3MiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo3MiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
