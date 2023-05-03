import { Component, ElementRef, Injectable, OnInit, Renderer2 } from '@angular/core';
import { convertAniBinaryToCSS } from 'ani-cursor';
import { Class } from 'src/app/character/class';
import { EmptyEquipment, Equipment, EquipmentType, Rarity } from 'src/app/equipment/equipment';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
styleUrls: ['./tableau.component.scss' /*, '../../../maple-icons.scss' */]
})

export class TableauComponent implements OnInit {

  //#region Defn
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

  inv_x: number = 16;
  inv_y: number = 8;
  equipment: Equipment[][]; // Holds all the above items in an easy to access list

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

    this.equipment = [];
    for (let i = 0; i < this.inv_x; i++) {
      this.equipment[i] = [];
      for (let u = 0; u < this.inv_y; u++) {
        this.equipment[i][u] = EmptyEquipment();
      }
    }
  }

  currEquipment: Equipment = EmptyEquipment();  

  ngOnInit(): void {
    this.applyCursor(".btn",                "http://localhost:4200/assets/static/cursor/maple_link.ani");
    this.applyCursor('.inventory-mesos',    "http://localhost:4200/assets/static/cursor/aero_working.ani")
    this.applyCursor('.inventory-points',   "http://localhost:4200/assets/static/cursor/aero_working.ani")

    // this.equipment.length = 20;
    // this.equipment[0][0] = this.ring1;
    
    this.createInventorySlotDivs(/*renderer *//*, elemRef */);
    this.tooltip = document.querySelector('#item-tooltip')!;   

    // Create fake weapon
    this.currEquipment.name = "Arcane Shade Hammer (+4)";
    this.currEquipment.rarity = Rarity.Legendary;
    this.currEquipment.is_unique = true;
    this.currEquipment.trade_count_left = 1; // next is adjusting the stars TODO

    // Calculate stats 

    /* ==== Get equipment ==== */
    /* ==== Cal stats ==== */
    
    /* ==== Update GUI ==== */
  }

  //#endregion Defn

  //#region UI Elements

  async applyCursor(selector: string, aniUrl: string) {

    const response = await fetch(aniUrl);
    const data = new Uint8Array(await response.arrayBuffer());

    const style = document.createElement('style');
    style.innerText = convertAniBinaryToCSS(selector, data);

    document.head.appendChild(style);
  }

  dragOnto(): void {
    
  }

  width: number = 34;
  height: number = 34;
  margin_x: number = 8;
  margin_y: number = 8;
  slots_x: number = 16;
  slots_y: number = 8;
  offset_x: number = 13;
  offset_y: number = 54;
  //
  createInventorySlotDivs(): void {
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
        //
        this.renderer.listen(_div, 'mousemove', (event: MouseEvent) => {
          console.log("E(" + event.x + ", " + event.y + "), Page(" + event.pageX + ", " + event.pageY + ")");
          this.tooltip.style.left = event.pageX - this.tooltip.offsetWidth / 2 + "px";
          // this.tooltip.style.bottom = window.innerHeight - event.pageY - this.tooltip.offsetHeight + "px";
          this.tooltip.style.top = event.pageY - this.tooltip.offsetHeight - this.tooltip_offsetY + "px";
          //
          this.tooltipActive = true;
        });
        this.renderer.listen(_div, 'mouseout', (event: MouseEvent) => {
          this.tooltipActive = false;
        });
        //
        this.renderer.appendChild(inventory, _div);
      }
    }
  }

  //

  //#endregion UI Elements

  //#region tooltip

  
  tooltip!: HTMLElement;
  tooltip_offsetY: number = 8;
  tooltipActive: boolean = false;

  hoverDivs() {

  }

  hoverDiv(id: number) {

  }

  getIdFromPos(x: number, y: number) {
    return x/(10+10) * 16 + y/(10+10);
  }

  generateText(eq: Equipment): void {

  }

  craftTooltip(event: any): void {
    


    return;
  }

  selectEquipment(eq: Equipment): void {
    if (eq.desc = "-1") {} // If null
    this.currEquipment = eq;
  }

  //#endregion Equipment

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

  //#endregion

  //#region

  compareClass(class_string: String, target_class: Class[]): boolean {
    target_class.forEach(_class => {
      if (class_string.toUpperCase() == _class.toUpperCase())
        return true;
    });
    return false;
  }

  //#endregion
}


//targets:
// display css properly
// display data based on curr equipment
// react-ize
// let inventory slots hold equipment
// let equip slots hold equipment
// drag and drop equipment
// equipment can only go into the correct slot
// change curr equipment based on inventory slot // events
/// cancelled
// display stats depending on what is equipped
// implement all functionalities of equipment
/// creat optimiser
//... just a fake one at the start...
// potential calculators
// starforce calculators
// JUST START WITH ONE CALCULATOR, DONT DO THE REST.