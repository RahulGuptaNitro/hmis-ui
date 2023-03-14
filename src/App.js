import './App.css';
import Dashboard from './Component/Dashboard';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Reg from './Component/Reg';
import Homepg from './Component/Homepg';
import Admission from './Component/Admission';
import { createContext } from 'react';
import WardDetails from './Component/WardDetails';
import { AddDUWB } from './Component/AddDUWB';


const ThemeContext= createContext("Light")

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route element={<Homepg/>} path="/" >
              <Route element={<Reg/>} path="/registration" />
              <Route element={<Dashboard/>} path="/dashboard" />
              <Route element={<Admission/>} path="/admission" />
              <Route element={<WardDetails/>} path="/wards" />
              <Route element={<AddDUWB/>} path="/adddept" />
              {/* <Route element={<ThemeContext.Provider value="dark">
                  <Admission/>
                </ThemeContext.Provider>} path="/adm" /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
export {ThemeContext};
