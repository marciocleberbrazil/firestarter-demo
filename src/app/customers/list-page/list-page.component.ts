import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { SeoService } from 'src/app/services/seo.service';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit, OnDestroy {
  customers!: Customer[];
  sub!: Subscription;

  constructor(
    private seo: SeoService, 
    private customerService: CustomerService,
    private db: AngularFirestore) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Customer List',
      description: 'A list filled with customers'
    });

    this.sub = this.customerService
      .subscribeToCustomers()
      .subscribe(customers => (this.customers = customers));
  }
}
