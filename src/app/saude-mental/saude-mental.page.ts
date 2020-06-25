import { Component, OnInit } from '@angular/core';
import { pessoa } from '../model/pessoa-model';

@Component({
  selector: 'app-saude-mental',
  templateUrl: './saude-mental.page.html',
  styleUrls: ['./saude-mental.page.scss'],
})
export class SaudeMentalPage implements OnInit {

  pessoas: pessoa;
  constructor() { }

  ngOnInit() {
  }

}
