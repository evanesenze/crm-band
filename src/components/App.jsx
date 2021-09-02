import React from 'react';
import SingIn from "./SignIn";
import CRM from "./CRM";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <SingIn user={user} setUser={setUser}>
      <CRM user={user}/>
    </SingIn>
    
  );
}

export default App;
