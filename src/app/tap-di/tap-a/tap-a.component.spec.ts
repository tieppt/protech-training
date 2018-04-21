import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapAComponent } from './tap-a.component';

describe('TapAComponent', () => {
  let component: TapAComponent;
  let fixture: ComponentFixture<TapAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
