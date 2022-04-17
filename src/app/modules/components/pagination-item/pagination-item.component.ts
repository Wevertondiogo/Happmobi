import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Pagination } from '../../../core/models/pagination.model';
import { fadeOut } from '../../../animations/fade-out.const';
import { fadeIn } from '../../../animations/fade-in.const';

@Component({
  selector: 'app-pagination-item',
  templateUrl: './pagination-item.component.html',
  styleUrls: ['./pagination-item.component.scss'],
  animations: [fadeIn, fadeOut]
})
export class PaginationItemComponent implements OnChanges {

  @Input()
  public pagination!: Pagination;

  public showAnimation = true;

  constructor() { }

  ngOnChanges({ pagination }: SimpleChanges): void {
    if (pagination) {
      this.invokeAnimation(600);
    }
  }

  private invokeAnimation(timeOut: number) {
    this.showAnimation = false;

    setTimeout(() => {
      this.showAnimation = true;
    }, timeOut);

  }

}
