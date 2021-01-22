import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtopicContentComponent } from './subtopic-content.component';

describe('SubtopicContentComponent', () => {
  let component: SubtopicContentComponent;
  let fixture: ComponentFixture<SubtopicContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtopicContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtopicContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
