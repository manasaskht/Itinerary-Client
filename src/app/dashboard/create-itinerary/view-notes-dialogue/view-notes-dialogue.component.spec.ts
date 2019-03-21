import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNotesDialogueComponent } from './view-notes-dialogue.component';

describe('ViewNotesDialogueComponent', () => {
  let component: ViewNotesDialogueComponent;
  let fixture: ComponentFixture<ViewNotesDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNotesDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNotesDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
