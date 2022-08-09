import React from 'react';

import './App.css';
// import Greet from  './components/Greet'
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter' 
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';

// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Stylesheet from './components/Stylesheet';
// import GreetNew from './components/GreetNew';
// import WelcomeNew from './components/WelcomeNew';
// import Form from './components/Form';
import LifecycleA from './components/LifecycleA';

function App() {
  return (
    <div className="App">
    <LifecycleA />
    {/*<Form />
      <WelcomeNew />
      <GreetNew name="niki"/>
       <Counter /> 

       <Message />
       <h1>hello</h1>
       <Greet name="niki" heroName="dad" > 
        this is child prop
       </Greet>
       <Greet name="kim" heroName="DAughter">
        <button>action</button>
       </Greet>
       

       <Welcome name="niki" heroName="dad"/>
       <Welcome name="kim" heroName="DAughter"/>
       <Welcome name="charu" heroName="mom"/>

      <Welcome name="niki" heroName="dad"/>
       <Welcome name="kim" heroName="DAughter"/>
       <Greet name="charu" heroName="mom"/> 
       <FunctionClick />
       <ClassClick />

       <EventBind />

       <ParentComponent />

       <UserGreeting />

       <NameList />

       <Stylesheet primary={true} />*/}
    </div>
  );
}

export default App;
