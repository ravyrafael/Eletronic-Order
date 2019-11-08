import React ,{ useEffect }from 'react';
import firebase from 'firebase'
import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => {
    useEffect(() => {
        var firebaseConfig = {
            apiKey: "AIzaSyCno596fleJdcEhCgA65bIeJM7EVD8TZiI",
            authDomain: "eletronicorder.firebaseapp.com",
            databaseURL: "https://eletronicorder.firebaseio.com",
            projectId: "eletronicorder",
            storageBucket: "eletronicorder.appspot.com",
            messagingSenderId: "684419841593",
            appId: "1:684419841593:web:d7bc4656fb9e35bab457e8"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
      }, []);
    
    return(<Routes />)
};

export default App;
