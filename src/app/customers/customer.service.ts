import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private db: AngularFirestore) { }

  subscribeToCustomers() {
    return this.db.collection<Customer>('customers', ref => ref.orderBy('name'))
      .valueChanges({idField: 'id'});
  }

  getCustomer(id: string) {
    return this.db.collection<Customer>('customers').doc(id).valueChanges();
  }
}