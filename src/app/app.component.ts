import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Pagination } from './core/models/pagination.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'happmobi';

  public paginations: Pagination[] = [];

  public currentPage = 1;
  public totalPages!: number;

  constructor(public appService: AppService) {  }

  ngOnInit(): void {
    this.getPaginations();
  }

  private getPaginations() {
    this.appService.getPaginations().subscribe((paginations: Pagination[]) => {
      this.paginations = paginations;
      this.totalPages = this.paginations.length;
    });
  }

}
