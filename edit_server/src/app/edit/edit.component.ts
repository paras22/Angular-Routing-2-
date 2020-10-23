import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  servers = [
  	{name: 'Server 1', status: 'Active'},
  	{name: 'Server 2', status: 'InActive'},
  	{name: 'Server 3', status: 'InActive'},
  	{name: 'Server 4', status: 'Active'}
  ];
  id: number;
  server:any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  	this.id = this.activatedRoute.snapshot.params['id'];

  	this.server = this.servers[this.id];
  }

}
