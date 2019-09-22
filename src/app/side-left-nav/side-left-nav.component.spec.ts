import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideLeftNavComponent } from './side-left-nav.component';

describe('SideLeftNavComponent', () => {
  let component: SideLeftNavComponent;
  let fixture: ComponentFixture<SideLeftNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideLeftNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideLeftNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
