import { TestBed } from '@angular/core/testing';

import { ListarRegistrosService } from './listar-registros.service';

describe('ListarRegistrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListarRegistrosService = TestBed.get(ListarRegistrosService);
    expect(service).toBeTruthy();
  });
});
