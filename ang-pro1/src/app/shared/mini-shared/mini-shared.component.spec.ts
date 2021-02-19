import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniSharedComponent } from './mini-shared.component';

describe('MiniSharedComponent', () => {
  let component: MiniSharedComponent;
  let fixture: ComponentFixture<MiniSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
