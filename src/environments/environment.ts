// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
interface firebaseConfig {
	apiKey: string;
	authDomain: string;
	projectId: string;
	storageBucket: string;
	messagingSenderId: string;
	appId: string;
	measurementId: string;
}

interface environment {
	production: boolean;
	firebaseConfig: firebaseConfig;
}

export const environment: environment = {
	production: false,
	firebaseConfig: {
		apiKey: "AIzaSyATOGjAoZWllNpSfuftBe6gT6kIWT-W2mc",
		authDomain: "studious-bassoon.firebaseapp.com",
		projectId: "studious-bassoon",
		storageBucket: "studious-bassoon.appspot.com",
		messagingSenderId: "908644946820",
		appId: "1:908644946820:web:f0487601285da61eb503d1",
		measurementId: "G-R66YF33E6H"
	}
};
