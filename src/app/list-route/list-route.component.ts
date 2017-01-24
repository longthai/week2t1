import { RoutesService } from './../services/routes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-route',
  templateUrl: './list-route.component.html',
  styleUrls: ['./list-route.component.css']
})
export class ListRouteComponent implements OnInit {
  private routes: any = [];
  constructor(private routesService: RoutesService) { }

  ngOnInit() {
    this.routesService.getRoutes('Kilo').subscribe((res) => {
      this.routes = res.data.stops;
      console.log(this.routes);
    });
  }
}

