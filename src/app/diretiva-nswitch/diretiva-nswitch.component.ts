import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-nswitch',
  templateUrl: './diretiva-nswitch.component.html',
  styleUrls: ['./diretiva-nswitch.component.css']
})
export class DiretivaNswitchComponent implements OnInit {

  abaSelect: string = 'home';

  handleSelectMenu(valor: string) {
    this.abaSelect = valor
  }

  constructor() { }

  ngOnInit(): void {
  }

}
