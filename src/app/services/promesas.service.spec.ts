import { TestBed } from '@angular/core/testing';

import { PromesasService } from './promesas.service';

describe('PromesasService', () => {
  let service: PromesasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromesasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
