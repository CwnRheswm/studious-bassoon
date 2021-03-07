import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import * as firebase from 'firebase';
type FirestoreDataConverter<T> = firebase.default.firestore.FirestoreDataConverter<T>;

export class BaseService {
	afStore: AngularFirestore;
	private collectionId: string;
	private converter: FirestoreDataConverter<firebase.default.firestore.DocumentData>;

	constructor(
		afStore: AngularFirestore,
		collectionId: string,
		converter: firebase.default.firestore.FirestoreDataConverter<firebase.default.firestore.DocumentData>
	) {
		this.afStore = afStore;
		this.collectionId = collectionId;
		this.converter = converter;
	}

	getCollectionWithConverter(): firebase.default.firestore.CollectionReference<firebase.default.firestore.DocumentData> {
		return this.afStore.firestore
				.collection(this.collectionId)
				.withConverter(this.converter);
	}

	getDocument(id: string): Observable<firebase.default.firestore.DocumentSnapshot<unknown>> {
		return this.afStore.collection(this.getCollectionWithConverter()).doc(id).get();
	}

	// listCollection(): Observable<firebase.default.firestore.DocumentData[]> {
	listCollection(): Observable<unknown[]> {
		return this.afStore.collection(this.getCollectionWithConverter()).get()
				.pipe(map((collection) => collection.docs.map((doc) => doc.data())));
	}

	watchCollection(): Observable<unknown[]> {
		return this.afStore.collection(this.getCollectionWithConverter()).valueChanges();
	}

	watchDocument(id: string): Observable<unknown> {
		return this.afStore.collection(this.getCollectionWithConverter()).doc(id).valueChanges();
	}

	queryCollection(
		field: string,
		operator: firebase.default.firestore.WhereFilterOp,
		query: unknown
	): Promise<firebase.default.firestore.QuerySnapshot<unknown>> {
		return this.getCollectionWithConverter().where(field, operator, query).get();
	}

	queryDocument(
		field: string,
		operator: firebase.default.firestore.WhereFilterOp,
		query: unknown
	): Promise<firebase.default.firestore.DocumentData> {
		return this.queryCollection(field, operator, query)
				.then((document: firebase.default.firestore.QuerySnapshot<unknown>) => {
					if (!document.empty) {
						return document.docs[0];
					} else {
						throw new Error('No document found.')
					}
				})
	}

	cloneDocument(data: unknown): any {

	}

	cloneDocumentInPlace(): any {

	}

	createDocument(data: unknown): Promise<firebase.default.firestore.DocumentReference<unknown>> {
		return this.afStore.collection(this.getCollectionWithConverter()).add(data)
				.then((documentReference: firebase.default.firestore.DocumentReference<unknown>) => {
					return documentReference;
				});
	}

	updateDocument(data: {[key: string]: unknown}): Promise<unknown> {
		const id = `${data?.id || this.afStore.createId()}`;
		const upload = {...data};
		delete upload.id;
		delete upload.ref;
		return this.afStore.collection(this.getCollectionWithConverter()).doc(id)
				.set({...data}, {merge: true})
				.then((documentReference) => {
					return documentReference;
				})
	}

	deleteDocument(id: string): Promise<void> {
		return this.afStore.collection(this.getCollectionWithConverter())
				.doc(id).delete();
	}
}