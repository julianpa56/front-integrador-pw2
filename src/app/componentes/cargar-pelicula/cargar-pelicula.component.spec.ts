import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarPeliculaComponent } from './cargar-pelicula.component';

describe('CargarPeliculaComponent', () => {
  let component: CargarPeliculaComponent;
  let fixture: ComponentFixture<CargarPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarPeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
