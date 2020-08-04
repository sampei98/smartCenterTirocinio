import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-posto',
  templateUrl: './posto.page.html',
  styleUrls: ['./posto.page.scss'],
})
export class PostoPage implements OnInit {

  id;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
