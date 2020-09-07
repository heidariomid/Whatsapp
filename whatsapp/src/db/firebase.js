import fireBase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCNcjbhJBBoqDssf7xNGMQmqSPB2ml0HPw',
	authDomain: 'whatsapp-d833a.firebaseapp.com',
	databaseURL: 'https://whatsapp-d833a.firebaseio.com',
	projectId: 'whatsapp-d833a',
	storageBucket: 'whatsapp-d833a.appspot.com',
	messagingSenderId: '180474218116',
	appId: '1:180474218116:web:53b7edd7644ab9871224d1',
};

const fireBaseApp = fireBase.initializeApp(firebaseConfig);
const db = fireBaseApp.firestore();
export default db;
