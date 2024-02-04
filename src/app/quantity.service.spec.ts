import { TestBed } from '@angular/core/testing';

import { QuantityService } from './quantity.service';

describe('QuantityService', () => {
  let service: QuantityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuantityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoud check financial quantity', () => {
    const res = service.isFinancialNumber("10m");
    expect(res).toBeTrue();
  });

  it('shoud not check financial quantity', () => {
    const res = service.isFinancialNumber("10")
    expect(res).toBeFalsy();
  });

  it('shoud transform quantity', () => {
    const res = service.transformQuantity("10m")
    expect(res).toBe(10000000);
  });

  it('shoud not transform quantity', () => {
    const res:any = service.transformQuantity('')
    expect(res).toBeNull();
  });

});
