import { Component, OnInit } from '@angular/core';
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

  constructor() {
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
    this.applyCursor("button", "http://localhost:4200/assets/static/cursor/maple_link.ani");
    this.applyCursor('.inv-mesos',  "http://localhost:4200/assets/static/cursor/aero_working.ani")

    this.equipment.length = 20;
    this.equipment[0] = this.ring1;
  }

  async applyCursor(selector: string, aniUrl: string) {

    const response = await fetch(aniUrl);
    const data = new Uint8Array(await response.arrayBuffer());

    const style = document.createElement('style');
    style.innerText = convertAniBinaryToCSS(selector, data);

    document.head.appendChild(style);
    console.log(style.innerText);
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
