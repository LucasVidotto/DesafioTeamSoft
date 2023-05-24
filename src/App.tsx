import React,{useState} from 'react';
import { Page } from './Page';
import { NavBar } from './Components/Nav/Nav';
import Context from './Components/Context/Context';
function App() {
  const [total, setTotal] = useState<number>(0);
  return (
    <>
    <Context.Provider value={[total, setTotal]}>
      <NavBar total={total}/>
      <Page />
    </Context.Provider>
    </>
  );
}

export default App;
