import { EmptyEquipment, Equipment } from "../equipment/equipment";
import { EmptyItem, Item } from "../equipment/item";

export class MarketEquipment {
	equipment: Equipment = EmptyEquipment();
	price: number = -1;

	// Non-default stats
	starforce: number = -1;

	constructor() {

	}
}

export class MarketItem {
	item: Item = EmptyItem();
	count: number = -1;
	price: number = -1;
}

export class MarketCurrency {
	cash: number = -1;
	price: number = -1;
	type: CurrencyType = CurrencyType.Mesos;
}

enum CurrencyType {
	PremiumCurrency,
	RealMoney,
	Mesos,
	MaplePoints,
	Mileage,
}