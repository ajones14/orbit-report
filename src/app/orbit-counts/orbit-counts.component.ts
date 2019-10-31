import { Component, OnInit, Input } from '@angular/core';
// import { Satellite } from '../satellite';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  // @Input() satellites: Satellite[];
  @Input() appComponent: AppComponent;
  constructor() { }

  ngOnInit() {
  }

  totalOfType(satelliteType: string): number {
    let count: number = 0;
    for (let i = 0; i < this.appComponent.displayList.length(); i++) {
      if (this.appComponent.displayList[i].type === 'Space Debris') {
        count++;
      }
    }
    return count;
  }

}
