import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // TODO 1: Navigate to the '/edit/:id' route by passing index as the id.
  onClick(index: number) {
  	this.router.navigate(['/edit', index]);
  }

}
