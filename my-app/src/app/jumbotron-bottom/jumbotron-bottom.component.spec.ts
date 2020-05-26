import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronBottomComponent } from './jumbotron-bottom.component';

describe('JumbotronBottomComponent', () => {
  let component: JumbotronBottomComponent;
  let fixture: ComponentFixture<JumbotronBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbotronBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
