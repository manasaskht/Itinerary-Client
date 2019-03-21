import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesDialogueComponent } from './notes-dialogue.component';

describe('NotesDialogueComponent', () => {
  let component: NotesDialogueComponent;
  let fixture: ComponentFixture<NotesDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
