import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMoveFolderComponent } from './modal-move-folder.component';

describe('ModalMoveFolderComponent', () => {
  let component: ModalMoveFolderComponent;
  let fixture: ComponentFixture<ModalMoveFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMoveFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMoveFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
