import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Membro } from '../membro/membro';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private dataSubject = new BehaviorSubject<any>(null);

  data$ = this.dataSubject.asObservable();

  updateData(data: any) {
    this.dataSubject.next(data);
  }
}
