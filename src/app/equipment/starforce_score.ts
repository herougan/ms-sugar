import { EquipmentType } from "./equipment";

export class StarforceScore {
	max_stars: number = -1;
	filled_stars: number = -1;
	levels: number = -1;
	attack: number = -1;

	first_max_stars: number = 15;
	second_max_stars: number = 10;

	type: EquipmentType = EquipmentType.None;

	getStars(row: number): [number, number] {
		let r1 = this.max_stars > this.first_max_stars ? this.first_max_stars : this.max_stars;
		let r2 = this.max_stars > this.first_max_stars ? this.max_stars - this.first_max_stars : 0;

		return [r1, r2];
	}

	getRows(): number {
		return this.max_stars > this.first_max_stars ? 2 : 1;
	}

	constructor(data: {}) {
		if ("type in data") {}
		// if ("type" in data) {
		// 	this.type = data["type"] as EquipmentType;
		// } else this.type = EquipmentType.None;
		// if ("attack" in data) {
		// 	this.attack = data["attack"] as number;
		// } else this.attack = -1;
		// if ("level" in data) {
		// 	let level = data["level"] as number;

		// 	if (level < 0) {
		// 		this.max_stars = -1;
		// 		this.filled_stars = 0;
		// 	} else if (level < 95) {
		// 		this.max_stars = 5;
		// 		this.filled_stars = 0;
		// 	} else if (level < 108) {
		// 		this.max_stars = 8;
		// 		this.filled_stars = 0;
		// 	} else if (level < 118) {
		// 		this.max_stars = 10;
		// 		this.filled_stars = 0;
		// 	} else if (level < 128) {
		// 		this.max_stars = 15;
		// 		this.filled_stars = 0;
		// 	} else if (level < 138) {
		// 		this.max_stars = 20;
		// 		this.filled_stars = 0;
		// 	} else {
		// 		this.max_stars = 25;
		// 		this.filled_stars = 0;
		// 	}
		// }
		// else this.levels = 1;
		// if ("max_stars" in data)
		// 	this.max_stars = data["max_stars"] as number;
		// else this.max_stars = 1;
		// if ("filled_stars" in data)
		// 	this.filled_stars = data["filled_stars"] as number;
		// else this.filled_stars = 0;
		
		// if (this.filled_stars > this.max_stars) {
		// 	// this.filled_stars = this.max_stars;
		// 	console.log("Model Error: Filled Stars > Max Stars: (" + this.filled_stars + " > " + this.max_stars + ")");
		// 	this.filled_stars = -1;
		// }
	}

	/* Stats */
	getStats(): number {
		if (this.type == EquipmentType.OneHWeapon || this.type == EquipmentType.TwoHWeapon) {

		}
		if (this.type == EquipmentType.Overall) {

		}
		if (this.type == EquipmentType.Shoes) {

		}
		if (this.type == EquipmentType.Gloves) {

		}
		if (this.type == EquipmentType.Hat || this.type == EquipmentType.Top || this.type == EquipmentType.Bottom ||
			this.type == EquipmentType.Overall || this.type == EquipmentType.Cape || this.type == EquipmentType.Ring ||
			this.type == EquipmentType.Pendant || this.type == EquipmentType.Belt || this.type == EquipmentType.Shoulder ||
			this.type == EquipmentType.OneHShield || this.type == EquipmentType.TwoHShield ||
			this.type == EquipmentType.OneHWeapon || this.type == EquipmentType.TwoHWeapon) {

		}


		return -1;
	}

	getCost(): number {
		if (this.filled_stars < 10) {

		} else if (this.filled_stars < 15) {

		} else if (this.filled_stars < 25) {
			
		}
		return -1;
	}
}

export function EmptyStarforceScore(): StarforceScore {
	return new StarforceScore({});
}

export function DefaultStarforceScore(): StarforceScore {
	return new StarforceScore({
		'level': 1,
	});
}

export function RandomStarforceScore(): StarforceScore {
	return new StarforceScore({});	
}