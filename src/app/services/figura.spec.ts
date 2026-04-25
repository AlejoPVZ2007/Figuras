import { TestBed } from '@angular/core/testing';

import { Figura } from './figura';

describe('Figura', () => {
  let service: Figura;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Figura);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
