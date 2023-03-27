export class Item {
	name: string = "";
	type: ItemType = ItemType.Etc;
}

enum ItemType {
	Gemstones,
	Flames,
	Cubes,
	Scissors,
	//
	Consumable,
	Buff,
	Material,
	Etc,
}

export function EmptyItem() {
	return new Item();
}