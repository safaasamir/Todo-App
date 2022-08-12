import React from "react";
import { Route, Routes } from "react-router-dom";
import AllMeetUp from "./pages/AllMeetup";
import NewMeetUp from "./pages/NewMeetup";
import Anotherproduct from "./pages/AnotherProduct";
import EditForm from "./component/meetup/EditForm";
import Navbar from "./component/layout/NavBar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route  path="/" element={<AllMeetUp />} />
        <Route  path="/NewMeetUp" element={<NewMeetUp />} />
        <Route  path="/list" element={<Anotherproduct />} />
        <Route  path="/edit" element={<EditForm />} />
        <Route  path="*" element={<h3 className="m-3 text-center bg-danger py-3">404 Page Not Found</h3>} />
      </Routes>
    </div>
  );
}
export default App;
