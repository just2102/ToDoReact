import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Preloader from "./Components/Common/Preloader";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Todos from "./Components/Todos/Todos";
import { initializeApp } from "./Redux/app-reducer";
import { getInit } from "./Redux/app-selector";
import { useAppDispatch, useAppSelector } from "./Redux/hooks";

function App() {
  const dispatch = useAppDispatch();
  const init = useAppSelector((state) => getInit(state));
  useEffect(() => {
    dispatch(initializeApp());
  }, []);
  return (
    <>
    {!init ? <Preloader/>
    : <div className="app_wrapper">
        <Header></Header>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/todos" element={<Todos />}></Route>
        </Routes>
      </div>
    }
    </>
  );
}

export default App;
