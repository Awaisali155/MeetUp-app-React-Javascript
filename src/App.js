import "./App.css";
import { Backdrop } from "./Components/Backdrop";
import { Todo } from "./Components/Todo";
import { Modal } from "./Components/Modal";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllMetup } from "./pages/AllMetup";
import { NewMetup } from "./pages/NewMetup";
import { Favroits } from "./pages/Favroits";
import { Layout } from "./Components/layout/Layout";
// import { MainNavigation } from "./Components/layout/MainNavigation";
function App() {
  return (
    <BrowserRouter>
      {/* <MainNavigation /> */}
      <Layout>
        <Routes>
          <Route>
            <Route path="/" element={<AllMetup />} />
            <Route path="NewMetup" element={<NewMetup />} />
            <Route path="Favroits" element={<Favroits />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
