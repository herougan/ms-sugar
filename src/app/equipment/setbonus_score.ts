export class SetBonusScore {
	set: Set;

	constructor(
		set: Set = Set.None
	) {
		this.set = set;
	}
}

export function EmptySetBonusScore(): SetBonusScore {
	return new SetBonusScore();
}

export function DefaultSetBonusScore(): SetBonusScore {
	return new SetBonusScore();
}

export function RandomSetBonusScore(): SetBonusScore {
	return new SetBonusScore();
}


/* Set Bonuses */

enum Set {
	None = "None",
	Pitched = "Pitched",
	Boss = "Boss",
	Dawn = "Dawn",
	Ethereal = "Ethereal",
	ArcaneUmbra = "Arcane Umbra",
	AbsoLabs = "AbsoLabs",
	ChaosRootAbyss = "Chaos Root Abyss",
}