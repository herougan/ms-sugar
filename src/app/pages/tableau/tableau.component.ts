import { Component, ElementRef, Injectable, OnInit, Renderer2 } from '@angular/core';
import { convertAniBinaryToCSS } from 'ani-cursor';
import { EmptyEquipment, Equipment } from 'src/app/equipment/equipment';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})

export class TableauComponent implements OnInit {

  /*
    Ground Objects
  */
  character: any;

  ring1: Equipment;
  ring2: Equipment;
  ring3: Equipment;
  ring4: Equipment;

  pocket: Equipment;
  earrings1: Equipment;
  face_acc: Equipment;
  eye_acc: Equipment;
  belt: Equipment;

  shoulder: Equipment;
  weapon: Equipment;
  hat: Equipment;
  top: Equipment;
  bottom: Equipment;
  overalls: Equipment;
  gloves: Equipment;
  shoes: Equipment;
  cape: Equipment;

  secondary_weapon: Equipment;

  emblem: Equipment;
  badge: Equipment;
  medal: Equipment;

  android: Equipment;
  android_heart: Equipment;
  book: Equipment;

  extra_acc1: Equipment;
  extra_acc2: Equipment;

  pendant1: Equipment;
  pendant2: Equipment;

  equipment: Equipment[] = []; // Holds all the above items in an easy to access list

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.ring1 = EmptyEquipment();
    this.ring2 = EmptyEquipment();
    this.ring3 = EmptyEquipment();
    this.ring4 = EmptyEquipment();

    this.pocket = EmptyEquipment();
    this.earrings1 = EmptyEquipment();
    this.face_acc = EmptyEquipment();
    this.eye_acc = EmptyEquipment();
    this.belt = EmptyEquipment();

    this.shoulder = EmptyEquipment();
    this.weapon = EmptyEquipment();
    this.hat = EmptyEquipment();
    this.top = EmptyEquipment();
    this.bottom = EmptyEquipment();
    this.overalls = EmptyEquipment();
    this.gloves = EmptyEquipment();
    this.shoes = EmptyEquipment();
    this.cape = EmptyEquipment();

    this.secondary_weapon = EmptyEquipment();

    this.emblem = EmptyEquipment();
    this.badge = EmptyEquipment();
    this.medal = EmptyEquipment();

    this.android = EmptyEquipment();
    this.android_heart = EmptyEquipment();
    this.book = EmptyEquipment();

    this.extra_acc1 = EmptyEquipment();
    this.extra_acc2 = EmptyEquipment();

    this.pendant1 = EmptyEquipment();
    this.pendant2 = EmptyEquipment();
  }

  ngOnInit(): void {
    this.applyCursor(".btn", "http://localhost:4200/assets/static/cursor/maple_link.ani");
    this.applyCursor('.inventory-mesos',  "http://localhost:4200/assets/static/cursor/aero_working.ani")
    this.applyCursor('.inventory-points',  "http://localhost:4200/assets/static/cursor/aero_working.ani")

    this.equipment.length = 20;
    this.equipment[0] = this.ring1;
    
    this.createInventorySlotDivs(/*renderer *//*, elemRef */);
  }

  async applyCursor(selector: string, aniUrl: string) {

    const response = await fetch(aniUrl);
    const data = new Uint8Array(await response.arrayBuffer());

    const style = document.createElement('style');
    style.innerText = convertAniBinaryToCSS(selector, data);

    document.head.appendChild(style);
  }

  width: number = 34;
  height: number = 34;
  margin_x: number = 8;
  margin_y: number = 8;
  slots_x: number = 16;
  slots_y: number = 8;
  offset_x: number = 13;
  offset_y: number = 54;
  createInventorySlotDivs(/*renderer: Renderer2 *//*, elemRef: ElementRef*/): void {
    let inventory = document!.getElementById('inventory') as HTMLElement;

    for (let i = 0; i < this.slots_x; i++) {
      for (let u = 0; u < this.slots_y; u++) {
        let _div = this.renderer.createElement("div")
        _div.classList.add("inventory-slot");
        _div.id = "inventory-slot-" + i + "_" + u;
        _div.style.left = (this.width + this.margin_x) * i + this.offset_x + "px";
        _div.style.top = (this.height + this.margin_y) * u + this.offset_y + "px";
        _div.style.width = this.width + "px";
        _div.style.height = this.height + "px";
        // _div.style.position = "absolute";
        // _div.style.backgroundColor = "red";
        
        // inventory.appendChild(_div);

        this.renderer.appendChild(inventory, _div);
        // this.renderer.appendChild(this.el.nativeElement, _div);
      }
    }
  }

  //#region Equipment

  allowDrop(event: any): void {
    event.preventDefault();
  }

  drop(event: any): void {
    event.preventDefault();
  }

  drag(event: any): void {
    // if (ev.dataTransfer && ev.target && ev.target)
    //   ev.dataTransfer.setData("text", ev.target.);
  }

  willDrag(event: any): void {
    // event.target.style.cursor = "url(../../../assets/static/cursor/maple_move.cur)";
    // event.target.style.cursor = 'moving';
  }

  craftTooltip(event: any): void {
    


    return;
  }

  //#endregion


}
