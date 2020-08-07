import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dettagli-carta',
  templateUrl: './dettagli-carta.page.html',
  styleUrls: ['./dettagli-carta.page.scss'],
})
export class DettagliCartaPage implements OnInit {
  carta: string;
  punti: number;
  constructor(private route: ActivatedRoute) {
    this.punti = Math.floor(Math.random() * 250);
  }

  ngOnInit() {
    this.carta = this.route.snapshot.paramMap.get('carta');
  }

}
