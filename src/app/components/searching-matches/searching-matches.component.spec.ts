import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingMatchesComponent } from './searching-matches.component';

describe('SearchingMatchesComponent', () => {
  let component: SearchingMatchesComponent;
  let fixture: ComponentFixture<SearchingMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchingMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
