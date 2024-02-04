import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuantityService } from '../quantity.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  num: number | null = null;

  constructor(
    private router: ActivatedRoute,
    private quantityService: QuantityService
  ) {}

  ngOnInit() {
    const quantity = this.router.snapshot.queryParamMap.get('quantity');
    this.num = this.quantityService.transformQuantity(quantity as string);
  }

}
