import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalArchiveFolderComponent } from './modal-archive-folder.component';

describe('ModalArchiveFolderComponent', () => {
  let component: ModalArchiveFolderComponent;
  let fixture: ComponentFixture<ModalArchiveFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalArchiveFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalArchiveFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
