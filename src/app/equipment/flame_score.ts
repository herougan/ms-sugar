import { EquipmentType } from "./equipment";

export class FlameScore {

	strength: number;
	dexterity: number;
	intelligence: number;
	luck: number;
	hp: number;
	mp: number;

	boss_boosted: boolean;

	constructor(
		strength: number = -1, dexterity: number = -1,
		intelligence: number = -1, luck: number = -1,
		hp: number = -1, mp: number = -1,
		boss_boosted: boolean = false
	)	{
		this.strength = strength;
		this.dexterity = dexterity;
		this.intelligence = intelligence;
		this.luck = luck;
		this.hp = hp;
		this.mp = mp;

		this.boss_boosted = boss_boosted;
	}
}

export function EmptyFlameScore(): FlameScore {
	return new FlameScore();
}

export function DefaultFlameScore(): FlameScore {
	return new FlameScore();
}

export function RandomFlameScore(level: number = -1, type: EquipmentType = EquipmentType.None): FlameScore {
	return new FlameScore();
}