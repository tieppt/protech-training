import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapBComponent } from './tap-b.component';

describe('TapBComponent', () => {
  let component: TapBComponent;
  let fixture: ComponentFixture<TapBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
