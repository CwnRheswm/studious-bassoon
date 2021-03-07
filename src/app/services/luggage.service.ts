import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { BaseService } from './base.service';
import { Luggage as LuggaegType } from '@interface/index.interface';

class Luggage {
	id?: string;
	ref?: firebase.default.firestore.DocumentReference<firebase.default.firestore.DocumentData>;
	name: string;
	category: string;
	owners: any; // Reference array of users that own the luggage.
	items: any; // Nested collection of items within the luggage.
	size: [number, number, number];

	constructor(place: PlaceType) {
		this.id = place?.id;
		this.ref = place?.ref;
		this.name = place.name;
		this.lat = place.lat;
		this.long = place.long;
		this.visited = place.visited;
	}
}

const placeConverter = {
	toFirestore: ((place: PlaceType) => {
		delete place.id;
		delete place.ref;
		return {...place};
	}),
	fromFirestore: ((
		snapshot: firebase.default.firestore.QueryDocumentSnapshot,
		options: firebase.default.firestore.SnapshotOptions
	) => {
		const data = snapshot.data(options) as PlaceType;
		return new Place({
			id: snapshot.ref.id,
			ref: snapshot.ref as firebase.default.firestore.DocumentReference<PlaceType>,
			...data
		})
	})
}

@Injectable({providedIn: 'root'})
export class PlacesBaseService extends BaseService {
	constructor(afStore: AngularFirestore) {
		super(afStore, 'places', placeConverter);
	}

	updatePlace(data: PlaceType): Promise<unknown> {
		return this.updateDocument({...data});
	}

	addPlace(data: PlaceType) {
		return this.createDocument({...data});
	}

	deletePlace(data: PlaceType) {
		if (data.id) {
			return this.deleteDocument(data.id);
		}
		return;
	}

	listPlaces() {
		return this.listCollection();
	}
}