export class Equipment {

	name: string;
	desc: string;

	level_req: number;

	strength: number;
	dexterity: number;
	intelligence: number;
	luck: number;

	patt: number;
	matt: number;

	type: EquipmentType;
	stars: Stars[];

	// meta
	source: string;
	meta: string;

	constructor(
		name: string, desc: string,
		level_req: number,
		strength: number, dexterity: number, intelligence: number, luck: number,
		patt: number, matt: number,
		type: EquipmentType, stars: Stars[],
		source: string, meta: string) {

		this.level_req = level_req;

		this.strength = strength;
		this.dexterity = dexterity;
		this.intelligence = intelligence;
		this.luck = luck;

		this.patt = patt;
		this.matt = matt;

		this.name = name;
		this.desc = desc;
		this.type = type;
		this.stars = stars;

		// Object.assign(this, {type, stars});

		// meta
		this.source = source;
		this.meta = meta;
	}
}

export function EmptyEquipment() {
	return new Equipment("", "", -1, -1, -1, -1, -1,
	-1, -1, EquipmentType.None, [], 
	"", "");
}

export class Stars {
	colour: string;
	desc: string;

	constructor(colour: string, desc: string) {
		this.colour = colour;
		this.desc = desc;
	}
}

export enum EquipmentType {
	Ring,
	Pocket,
	Book,
	Pendant,
	EyeAccessory,
	FaceAccessory,
	EarAccessory,
	AnyAccessory,
	Belt,
	//
	OneHWeapon,
	TwoHWeapon,
	SecondaryWeapon,
	OneHShield,
	TwoHShield,
	//
	Hat,
	Top,
	Bottom,
	Overall,
	Shoes,
	Shoulder,
	Gloves,
	Cape,
	//
	Emblem,
	Badge,
	Medal,
	Title,
	Android,
	Heart,
	//
	None,
}