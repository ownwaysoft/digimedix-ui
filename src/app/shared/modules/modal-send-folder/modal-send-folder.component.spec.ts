import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSendFolderComponent } from './modal-send-folder.component';

describe('ModalSendFolderComponent', () => {
  let component: ModalSendFolderComponent;
  let fixture: ComponentFixture<ModalSendFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSendFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSendFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
