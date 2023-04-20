import { Component, OnInit } from '@angular/core';
import { Item } from '../equipment/item';
import { Equipment } from '../equipment/equipment';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  inventory = [];

  constructor() { }

  ngOnInit(): void {
  }

  /* Inventory Management */

  addItem(item: Item): void {
    
  }

  loseItem(item: Item): void {

  }

  swapItem(item: Item): void {
     
  }

  addEquipment(equipment: Equipment): void {
    
  }

  loseEquipment(equipment: Equipment): void {

  }

  swapEquipment(equipment: Equipment): void {
     
  }

}
