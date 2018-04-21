import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapCComponent } from './tap-c.component';

describe('TapCComponent', () => {
  let component: TapCComponent;
  let fixture: ComponentFixture<TapCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
