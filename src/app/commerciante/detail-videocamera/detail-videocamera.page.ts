import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-videocamera',
  templateUrl: './detail-videocamera.page.html',
  styleUrls: ['./detail-videocamera.page.scss'],
})
export class DetailVideocameraPage implements OnInit {

  id;
  zona;
  descr;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.zona = this.route.snapshot.paramMap.get('zona');
    if (this.zona === 'verde'){
      this.descr = 'Zona verde, poco affollata, le misure di distanziamento vengono rispettate correttamente';
    }
    if (this.zona === 'giallo'){
      this.descr = 'Zona gialla, non molto affollata, le misure di distanziamento vengono rispettare ma tuttavia il numero di persone presenti in quegli scaffali è quasi al limite';
    }
    if (this.zona === 'rosso'){
      this.descr = 'Zona rossa, molto affollata, le misure di distanziamento non vengono rispettate in quanto cè troppa gente e diventa difficile mantenere la distanza di sicurezza e quindi si creano assembramenti';
    }
  }

}
