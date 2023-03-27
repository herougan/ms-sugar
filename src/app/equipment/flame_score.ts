import { EquipmentType } from "./equipment";

export class FlameScore {
	boss_boosted: boolean = false;

	
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