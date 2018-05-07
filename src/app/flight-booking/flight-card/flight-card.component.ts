import { Flight } from './../../entities/flight';
import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnChanges {


  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() { 
    console.debug('ctor', this.selected, this.item);
  }

  ngOnInit() {
    // this.selectedChange.next(true);
    console.debug('ngOnInit', this.selected, this.item);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.debug('ngOnChanges', this.selected, this.item);

    if (changes['item']) {
      console.debug('\t item changed');
    }
    if (changes['selected']) {
      console.debug('\t selected changed');
    }

  }
    
  select(): void {
    this.selected = true;
    this.selectedChange.next(true);
  }

  deselect(): void {
    this.selected = false;
    this.selectedChange.next(false);
  }

}
