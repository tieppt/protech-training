import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapDiComponent } from './tap-di.component';

describe('TapDiComponent', () => {
  let component: TapDiComponent;
  let fixture: ComponentFixture<TapDiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapDiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
