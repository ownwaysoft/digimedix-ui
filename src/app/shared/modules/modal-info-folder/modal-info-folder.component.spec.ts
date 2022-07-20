import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInfoFolderComponent } from './modal-info-folder.component';

describe('ModalInfoFolderComponent', () => {
  let component: ModalInfoFolderComponent;
  let fixture: ComponentFixture<ModalInfoFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInfoFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInfoFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
