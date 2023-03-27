export class ScrollScore {
	slots: number = -1;


	constructor(args: any) {

	}
}

export function EmptyScroll(slots: number = -1): ScrollScore {
	return new ScrollScore({"slots": slots});
}

export function DefaultScroll(slots: number = -1): ScrollScore {
	return new ScrollScore({});
}

export function RandomScroll(slots: number = -1): ScrollScore {
	return new ScrollScore({});
}

export function FullTrace(slots: number = -1, level: number = -1, trace_level: TraceTier = TraceTier.Hundred): ScrollScore {
	return new ScrollScore({});
}

enum TraceTier {
	Fifteen,
	Thirty,
	Seventy,
	Hundred,
}

export function SpecialScroll(slots: number = -1, level: number = -1, special_scroll: SpecialScrollType = SpecialScrollType.None): ScrollScore {
	return new ScrollScore({});
}

enum SpecialScrollType {
	FragmentOfDistortedTime,
	DragonNineHeart,
	None,
}

/* Special Upgrade */

enum SpecialUpgrade {

}

// Special scrolls

// Fragment of Distorted Time

// Dragon Nine Heart