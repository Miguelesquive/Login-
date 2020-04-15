import React from 'react';
import 'firebaseui/dist/firebaseui.css';
import Firebase from '../server/firebase';//aca decimos la ruta de una carpeta


class Login extends React.Component{

    state = {
        autenticado : false,
        usuario: "",
        firebase: null
    }

    componentDidMount(){
        const firebase = new Firebase();

        firebase.auth.onAuthStateChanged(authUser => {
        
            authUser 
            ? this.setState({//aca si el usuario esta autentificado ya no muestra el login y muestra nombre de usuario
                autenticado : true,
                usuario: firebase.auth.currentUser.email,
                firebase : firebase
            })
            :firebase.firebaseui.start("#firebaseui-auth-container",{ //si el usuario no esta logeado le muestra el login
                 signInSuccessUrl : "/",
                 credentialHelper: "none",
                 callbacks:{
                     signInSuccessWithAuthResult : (authResult, redirectUrl) =>{

                        this.setState({
                            autenticado : true,
                            usuario : firebase.auth.currentUser.email,
                            firebase : firebase
                        })

                        return false;
                     }
                 },
                 signInOptions: [
                                 {
                                  provider : firebase.autorization.EmailAuthProvider.PROVIDER_ID
                                 }
                                ]  
            })          
        })
        //aca vemos si el usuario esta logeando o no
    
    }

render(){// se encraga de pintar la interfas grafica del login
    return this.state.autenticado
    ? (
        <React.Fragment>
            <div>Usuario logeado {this.state.usuario}</div>
            <a href="#" onClick={()=> { this.state.firebase.auth.signOut().then(success=> { 
                                        this.setState({ 
                                                       autenticado:false
                                                     }) 
                                                }) 
                                      } 
                                } >Salir</a>
        </React.Fragment>
      )
      :<div id="firebaseui-auth-container"> </div>
   }
}
 export default Login;