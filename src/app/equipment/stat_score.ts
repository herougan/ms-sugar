import { EquipmentType } from "./equipment";

export class StatScore {

	strength: number;
	dexterity: number;
	intelligence: number;
	luck: number;

	hp: number;
	mp: number;

	wep_att: number;
	mag_att: number;
	def: number;
	mdef: number;
	acc: number;

	constructor(
		strength: number = 0,
		dexterity: number = 0,
		intelligence: number = 0,
		luck: number = 0,

		hp: number = 0,
		mp: number = 0,

		wep_att: number = 0,
		mag_att: number = 0,
		def: number = 0,
		mdef: number = 0,
		acc: number = 0
	) {
		this.strength = strength;
		this.dexterity = dexterity;
		this.intelligence = intelligence;
		this.luck = luck;

		this.hp = hp;
		this.mp = mp;
		
		this.wep_att = wep_att;
		this.mag_att = mag_att;
		this.def = def;
		this.mdef = mdef;
		this.acc = acc;
	}
}

export function EmptyStatScore(): StatScore {
	return new StatScore();
}

export function DefaultStatScore(): StatScore {
	return new StatScore();
}

export function RandomStatScore(level: number = -1, type: EquipmentType = EquipmentType.None): StatScore {
	return new StatScore();
}