import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateFolderComponent } from './modal-create-folder.component';

describe('ModalCreateFolderComponent', () => {
  let component: ModalCreateFolderComponent;
  let fixture: ComponentFixture<ModalCreateFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
