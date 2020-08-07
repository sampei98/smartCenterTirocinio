import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

  message;
  id;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = this.route.snapshot.paramMap.get('message');
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
