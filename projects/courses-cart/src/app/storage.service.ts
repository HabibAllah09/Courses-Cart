import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  getItemFromLocalStorage(key: string): string | null {
    return localStorage.getItem(key);
  }

  saveCartToLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}
