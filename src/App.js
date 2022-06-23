import './App.css';
// import Hello from './component/Hello'
// import Welcome from './component/Welcome';
// import Fuckyou from './component/Fuckyou'
import Header from './component2/Header';
import DayList from './component2/DayList';
import Day from './component2/Day';
import CreateWord from './component2/CreateWord';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import EmptyPage from './component2/EmptyPage';
import CreateDay from './component2/CreateDay';
function App() {
  // const name='Tom'
  // const naver={
  //   name:'naver',
  //   url:'https://naver.com'
  // }
  return (
    // <div className="App">
    //   <h1 style={{
    //     color:"red",
    //     backgroundColor:"green"}}>fuck you {name}</h1>
    //     <a href={naver.url}>{naver.name}</a>
    //     <Fuckyou age={10}/>
    //     <Fuckyou age={15}/>
    //     <Hello />
    //     <Welcome age={10}/>
    //     <Welcome age={20}/>
    //     <Welcome age={30}/>
    // </div>
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/"> 
          <DayList/>   
        </Route>

        <Route path="/day/:day">  
          <Day/>   
        </Route>
        
        <Route path="/create_word">  
          <CreateWord/>   
        </Route>

        <Route path="/create_day">  
          <CreateDay/>   
        </Route>

        <Route>     
          <EmptyPage/>    
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
