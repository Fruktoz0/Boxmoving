import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-szinvalaszto',
  templateUrl: './szinvalaszto.component.html',
  styleUrls: ['./szinvalaszto.component.css']
})
export class SzinvalasztoComponent {

  @Output()
  ujSzinKivalasztva = new EventEmitter();

  formSubmitTortent(e: any){
    e.preventDefault();
    const ujSzin = e.target.elements.szin.value;
    this.ujSzinKivalasztva.emit(ujSzin);
  }

}
