import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAluguelComponent } from './list-aluguel.component';

describe('ListAluguelComponent', () => {
  let component: ListAluguelComponent;
  let fixture: ComponentFixture<ListAluguelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAluguelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAluguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
