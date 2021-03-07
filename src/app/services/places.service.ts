import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { BaseService } from './base.service';
import { Place as PlaceType } from '@interface/place.interface';

class Place {
	id?: string;
	ref?: firebase.default.firestore.DocumentReference<firebase.default.firestore.DocumentData>;
	name: string;
	lat: number;
	long: number;
	visited: boolean;

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

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private firestore: AngularFirestore) { }

  firestorePlacesCollection = this.firestore.collection('places');

  places$ = this.firestorePlacesCollection.snapshotChanges().pipe(
  	map((actions: any[]) => {
  		return actions.map((p: any) => {
  			const place = p.payload.doc;
  			const id = place.id;
  			return {id, ...place.data() } as Place;
  		});
  	})
  );

  async addPlace(data: Place): Promise<void> {
  	try {
  		await this.firestorePlacesCollection.add(data);
  	} catch (err) {
  		console.log(err);
  	}
  }

  async updatePlace(id: string, visited: boolean): Promise<void> {
    try {
      await this.firestorePlacesCollection
        .doc(id)
        .set({ visited: visited }, { merge: true });
    } catch (err) {
      console.log(err);
    }
  }

  async deletePlace(id: string): Promise<void> {
    try {
      await this.firestorePlacesCollection.doc(id).delete();
    } catch (err) {
      console.log(err);
    }
  }
}
