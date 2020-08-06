import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-negozi',
  templateUrl: './view-negozi.page.html',
  styleUrls: ['./view-negozi.page.scss'],
})
export class ViewNegoziPage implements OnInit {
  jsonData: any = [];

  constructor( ) {
    this.initializaJSONData();
  }

  ngOnInit() {}

  FilterJSONData(ev: any){
    this.initializaJSONData();
    const val = ev.target.value;
    if (val && val.trim() != ''){
      this.jsonData = this.jsonData.filter((item)=>{
        return (item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      })
    }
  }

  initializaJSONData(){
    this.jsonData = [
      {
        src : "../../../assets/logoNegozi/mediaWorld.png",
        name : 'Mediaworld',
        persone : '12/70',
        distanza: "10 mt",
        valutazione: '4,6'
      },
      {
        src : "../../../assets/logoNegozi/ralph.png",
        name : 'Ralph Lauren',
        persone : '17/45',
        distanza: "14 mt",
        valutazione: '4,1'
      },
      {
        src : "../../../assets/logoNegozi/harmont.png",
        name : 'Harmont&Blaine',
        persone : '5/20',
        distanza: "19 mt",
        valutazione: '4,8'
      },
      {
        src : "../../../assets/logoNegozi/yama.jpg",
        name : 'Yamamay',
        persone : '0/13',
        distanza: "19 mt",
        valutazione: '3,9'
      },
      {
        src : "../../../assets/logoNegozi/tommy.png",
        name : 'TOMMY HILFIGER',
        persone : '9/34',
        distanza: "22 mt",
        valutazione: '4,3'
      },
      {
        src : "../../../assets/logoNegozi/decathlon.png",
        name : 'DECATHLON',
        persone : '79/80',
        distanza: "50 mt",
        valutazione: '4,6'
      },
      {
        src : "../../../assets/logoNegozi/bata.png",
        name : 'Bata',
        persone : '20/35',
        distanza: "40 mt",
        valutazione: '4,0'
      },
    ];
  }


}
