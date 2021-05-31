import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SeoService } from 'src/app/services/seo.service';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit, OnDestroy {

  customerId!: string;
  customer!: Customer | undefined;
  sub!: Subscription;
  
  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private seo: SeoService) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    const customerId = this.route.snapshot.paramMap.get('id');
    
    if(customerId) {
      this.customerId = customerId;

      this.sub = this.customerService
        .getCustomer(customerId)
        .subscribe(customer => (this.customer = customer));
    }
  }
}
