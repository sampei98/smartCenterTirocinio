import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScontrinoPage } from './scontrino.page';

describe('ScontrinoPage', () => {
  let component: ScontrinoPage;
  let fixture: ComponentFixture<ScontrinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScontrinoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScontrinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
