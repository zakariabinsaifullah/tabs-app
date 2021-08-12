import './App.css';
import Tabs from './Components/Tabs'
import Buttons from './Components/Buttons'

import data from './data';
import {useState} from "react";

function App() {
    const tabs = data;
    const [value, setValue] = useState(0);
    const years = data.map(item=> item.year);
    const currentItem = (index) => {
        setValue(index);
    }
  return (
    <div className="App">
        <Buttons years={years} onClickFunc={ currentItem } currentItem={ value }/>
        <Tabs tabs={tabs} value={value} />
    </div>
  );
}

export default App;
