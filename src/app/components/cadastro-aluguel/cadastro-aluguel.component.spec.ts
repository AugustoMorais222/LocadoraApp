import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAluguelComponent } from './cadastro-aluguel.component';

describe('CadastroAluguelComponent', () => {
  let component: CadastroAluguelComponent;
  let fixture: ComponentFixture<CadastroAluguelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroAluguelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAluguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
