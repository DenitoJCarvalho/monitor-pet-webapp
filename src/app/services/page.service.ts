import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { }

  public goToPage(endPoint: string, id?: string, param1?: string, param2?: string): string {
    return `${endPoint}/${id}`
  }
}
