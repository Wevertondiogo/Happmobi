import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-controls',
  templateUrl: './page-controls.component.html',
  styleUrls: ['./page-controls.component.scss']
})
export class PageControlsComponent {
  @Input()
  public page!: number;

  @Input()
  public totalPages!: number;

  @Output()
  public pageChange = new EventEmitter<number>();

  constructor() { }

  public nextPage()  {
    this.page = Math.min(this.totalPages, this.page + 1)
    this.pageChange.emit(this.page);
  }

  public prevPage() {
    this.page = Math.max(1, this.page - 1)
    this.pageChange.emit(this.page);
  }

  get isFirst(): boolean {
    return this.page === 1;
  }

  get isLast(): boolean {
    return this.page === this.totalPages;
  }

}
