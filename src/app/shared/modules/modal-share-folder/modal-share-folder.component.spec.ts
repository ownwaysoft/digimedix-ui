import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalShareFolderComponent } from './modal-share-folder.component';

describe('ModalShareFolderComponent', () => {
  let component: ModalShareFolderComponent;
  let fixture: ComponentFixture<ModalShareFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalShareFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalShareFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
