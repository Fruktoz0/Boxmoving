import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  kivalasztottSzin = "pink";

  szinValasztasTortent(ujSzin: string){
    this.kivalasztottSzin = ujSzin;
  }


}
