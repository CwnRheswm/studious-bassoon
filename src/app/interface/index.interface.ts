export interface Luggage {
	id?: string;
	ref?: any;
	name: string;
	category: string;
	owners: any; // Reference array of users that own the luggage.
	items: any; // Nested collection of items within the luggage.
	size: [number, number, number];
}

export interface User {
	id?: string;
	name: string;
	itemSets: // Nested Collection of item sets that can be applied to a luggage.
}

export interface PackingItem {
	id?: string;
	name: string;
	category: string;
	number: number;
	numberPerDay?: number;
	weight?: number;
	size?: [number, number, number];
}

// Allows predefined sets of items to be created, with a value of how many days of travel it represents, this can be used during cloning to add "ItemSet: Vegas" for 5 days, adding in 5 shirts, @ one per day, but on one toothbrush, @ 0 per day, and 3 pants, @ 0.5 per day.
export interface ItemSet {
	name: string;
	category: string;
	items: any; // Nested collection of items that can be cloned into a luggage.
	days: number;
}