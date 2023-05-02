import { EmptyFlameScore, FlameScore } from "./flame_score";
import { EmptyScroll, ScrollScore } from "./scroll_score";
import { EmptyStarforceScore, StarforceScore } from "./starforce_score";

export class Equipment {

	name: string;
	desc: string;
	rarity: Rarity;
	is_unique: boolean;

	trade_count_left: number;

	level_req: number;

	health: number = 0;
	mana: number = 0;
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

	// Flame score
	flameScore: FlameScore; // Test

	constructor(
		name: string = "", desc: string = "", rarity: Rarity = Rarity.Common,
		is_unique:boolean = false, level_req: number = -1, trade_count_left: number = 0,
		strength: number = -1, dexterity: number = -1, intelligence: number = -1, luck: number = -1,
		patt: number = -1, matt: number = -1,
		type: EquipmentType = EquipmentType.None, stars: Stars[] = [],
		source: string = "", meta: string = "",
		// Scores
		flameScore: FlameScore = EmptyFlameScore()
		) {

		this.level_req = level_req;
		this.is_unique = is_unique;
		this.trade_count_left = trade_count_left;

		this.strength = strength;
		this.dexterity = dexterity;
		this.intelligence = intelligence;
		this.luck = luck;

		this.patt = patt;
		this.matt = matt;

		this.name = name;
		this.desc = desc;
		this.rarity = rarity;
		this.type = type;
		this.stars = stars;

		// Object.assign(this, {type, stars});

		// meta
		this.source = source;
		this.meta = meta;

		this.flameScore = flameScore;
	}

	/* Flames */
	flame: FlameScore = EmptyFlameScore();

	/* Starforce */
	starforce: StarforceScore = EmptyStarforceScore();

	/* SpellTrace/Scrolling */
	scrollScore: ScrollScore = EmptyScroll();

	statsToString(): string {
		return "Stats"; // scroll score, flame score, stat score
	}

	potentialsToString(): string {
		return "Potentials";
	}

	setBonusToString(): string {
		return "Bonus";
	}

}

export function EmptyEquipment() {
	return new Equipment();
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

export enum Rarity {
	Ancient = "Ancient",
	Mythic = "Mythic",
	Legendary = "Legendary",
	Unique = "Unique",
	Epic = "Epic",
	Rare = "Rare",
	Uncommon = "Uncommon",
	Common = "Common",
}