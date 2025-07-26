import { useState } from 'react';
import { internet_identity_app_backend } from 'declarations/internet_identity_app_backend';
import { AuthProvider, useAuth } from './AuthProvider';
import Homepage from './homepage';
import Logout from "./logout"

function App() {

  const {isAuth} = useAuth();

  return (
    <main>
      {isAuth ? <Homepage/> : <Logout/>}
    </main>
  );
}

export default () => (
  <AuthProvider>
    <App/>
  </AuthProvider>
)
