import {BrowserRouter, Route, Routes} from "react-router-dom";
import Ods from './pages/Ods';
import Onu from './pages/Onu';
import Perfil from './pages/Perfil'
import Home from './pages/Home'
function AppRoutes(){
    return(

        <BrowserRouter>
<Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/Perfil' element={<Perfil />}></Route>
    <Route path='/Ods' element={<Ods />}></Route>
    <Route path='/Onu' element={<Onu />}></Route>

</Routes>
</BrowserRouter>
)
}
export default AppRoutes

