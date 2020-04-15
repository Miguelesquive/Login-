import app from 'firebase/app';
import 'firebase/auth';//importo la libreria de autentificacion
import * as firebaseui from 'firebaseui';//importo la libreria de interface

const firebaseConfig = {
    apiKey: "AIzaSyDLnthGxpKr4unGmGJIX5zBQtFpe5d7PGc",
    authDomain: "guik-4a0c1.firebaseapp.com",
    databaseURL: "https://guik-4a0c1.firebaseio.com",
    projectId: "guik-4a0c1",
    storageBucket: "guik-4a0c1.appspot.com",
    messagingSenderId: "701910365557",
    appId: "1:701910365557:web:d3fd3415a16493c8be4f3c",
    measurementId: "G-82Y126H09N"
  };
  //pegamoos la autentificacion del proyecto de firebase que esta en la nube

class Firebase{
    constructor(){
    app.initializeApp(firebaseConfig);//aca hacemos que arranque la conexion con react y firebase
    this.auth = app.auth(); //aca decimos que trabaje con el metodo auth
    this.autorization = app.auth;
    this.firebaseui = new firebaseui.auth.AuthUI(app.auth());
    }
}

export default Firebase;