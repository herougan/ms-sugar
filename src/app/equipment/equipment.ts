import { Class } from "../character/class";
import { EmptyFlameScore, FlameScore } from "./flame_score";
import { EmptyBonusPotentialScore, EmptyPotentialScore, PotentialScore } from "./potential_score";
import { EmptyScroll, ScrollScore } from "./scroll_score";
import { EmptySetBonusScore, SetBonusScore } from "./setbonus_score";
import { EmptyStarforceScore, StarforceScore } from "./starforce_score";
import { EmptyStatScore, StatScore } from "./stat_score";

export class Equipment {

	name: string;
	desc: string;
	rarity: Rarity;
	is_unique: boolean;

	trade_count_left: number;

	stat_req: StatScore;
	level_req: number;
	class_req: Class[];

	// Special stats

	type: EquipmentType;
	stars: Stars[];

	// Meta
	source: string;
	meta: string;

	// Scores
	starforce_score: StarforceScore;
	flame_score: FlameScore; // Test
	stat_score: StatScore;
	setbonus_score: SetBonusScore;
	potential_score: PotentialScore;
	bonus_potential_score: PotentialScore;

	constructor(
		name: string = "Default", desc: string = "Empty Description", rarity: Rarity = Rarity.Common,
		is_unique:boolean = false, class_req: Class[] = [Class.Beginner], stat_req: StatScore = EmptyStatScore(), level_req: number = -1, trade_count_left: number = 0,
		type: EquipmentType = EquipmentType.None, stars: Stars[] = [],
		source: string = "", meta: string = "",
		// Scores
		starforce_score: StarforceScore = EmptyStarforceScore(),
		stat_score: StatScore = EmptyStatScore(),
		flame_score: FlameScore = EmptyFlameScore(),
		setbonus_score: SetBonusScore = EmptySetBonusScore(),
		// Potential
		potential_score: PotentialScore = EmptyPotentialScore(),
		bonus_potential_score: PotentialScore = EmptyBonusPotentialScore(),
		) {

		this.class_req = class_req;
		this.stat_req = stat_req;
		this.level_req = level_req;
		this.is_unique = is_unique;
		this.trade_count_left = trade_count_left;

		this.name = name;
		this.desc = desc;
		this.rarity = rarity;
		this.type = type;
		this.stars = stars;

		// Object.assign(this, {type, stars});

		// meta
		this.source = source;
		this.meta = meta;

		this.starforce_score = starforce_score;
		this.flame_score = flame_score;
		this.stat_score = stat_score;
		this.setbonus_score = setbonus_score;

		this.potential_score = potential_score;
		this.bonus_potential_score = bonus_potential_score;
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