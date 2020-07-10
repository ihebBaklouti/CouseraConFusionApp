import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderconfigurableexampleComponent } from './sliderconfigurableexample.component';

describe('SliderconfigurableexampleComponent', () => {
  let component: SliderconfigurableexampleComponent;
  let fixture: ComponentFixture<SliderconfigurableexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderconfigurableexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderconfigurableexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
