import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Clinics from "./components/Clinics";
import Hospitals from "./components/Hospitals";
import Pharmacy from "./components/Pharmacy";
import Adults65 from "./components/Adults65";
import Kids from "./components/Kids";
import Kidscare from "./components/Kidscare";
import Publiccare from "./components/Publiccare";
import Home from "./components/Home";
import Adultunder65 from "./components/Adultunder65";
import Mentalhealth from "./components/Mentalhealth";
import Contactus from "./components/Contactus";
import Membership from "./components/Membership";
import SingleCard from "./components/SingleCard.jsx";  // ✅ Import SingleCard component

import DashboardLayout from "./components/Dashboard/DashboardLayout";
import DashboardView from "./components/Dashboard/DashboardView";
import Addhospital from "./components/Dashboard/Addhospital";
import Hospitalslist from "./components/Dashboard/Hospitalslist";
import Addclinic from "./components/Dashboard/Addclinic";
import Clinicslist from "./components/Dashboard/Clinicslist";
import Addpharmacy from "./components/Dashboard/Addpharmacy";
import Pharmacieslist from "./components/Dashboard/Pharmacieslist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="clinics" element={<Clinics />} />
          <Route path="hospitals" element={<Hospitals />} />
          <Route path="pharmacy" element={<Pharmacy />} />
          <Route path="adults-under-65" element={<Adultunder65 />} />
          <Route path="adults-65" element={<Adults65 />} />
          <Route path="kids" element={<Kids />} />
          <Route path="mental-health" element={<Mentalhealth />} />
          <Route path="get-in-touch" element={<Contactus />} />
          <Route path="publiccare" element={<Publiccare />} />
          <Route path="kidscare" element={<Kidscare />} />
          <Route path="membership" element={<Membership />} /> 
          <Route path="singlecard/:id" element={<SingleCard />} />  {/* ✅ Add this route */}
        </Route>

        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard" index element={<DashboardView />} />
          <Route path="dashboard/addhospital" element={<Addhospital />} />
          <Route path="dashboard/hospitalslist" element={<Hospitalslist />} />
          <Route path="dashboard/addclinic" element={<Addclinic />} />
          <Route path="dashboard/clinicslist" element={<Clinicslist />} />
          <Route path="dashboard/addpharmacy" element={<Addpharmacy />} />
          <Route path="dashboard/pharmacieslist" element={<Pharmacieslist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
