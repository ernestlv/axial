import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuantityService {

  constructor() { }

  isFinancialNumber(quantity: string): boolean {
    const q = quantity.trim();
    return /^\d{0,3}\.\d{1,3}[k|K|m|M|b|B]$/.test(q) ||
           /^\d{1,3}[k|K|m|M|b|B]$/.test(q)

  }

  transformQuantity(quantity: string): number | null {
    const q = quantity.trim();
    const res = /^(\d*\.?\d*)([kKmMbB])$/.exec(q);
    if (!res) {
      return null;
    }
    const num = parseFloat(res[1]);
    const qualifier = res[2].toLowerCase();
    return num * (qualifier === "k" ? 1000 : qualifier === "m" ? 1000000 : 1000000000);
  }

}
