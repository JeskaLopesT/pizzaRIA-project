import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCardapioComponent } from './delete-cardapio.component';

describe('DeleteCardapioComponent', () => {
  let component: DeleteCardapioComponent;
  let fixture: ComponentFixture<DeleteCardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCardapioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
