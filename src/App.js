import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import GlovoMain from "./Components/GlovoMain";
const AddEdit = React.lazy(() => import("./Components/AddEdit"));
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<>Loading.....</>}>
              <GlovoMain />
            </React.Suspense>
          }
        />
        <Route path="addEdit" element={ <React.Suspense fallback={<>...</>}>
                <AddEdit />
              </React.Suspense>} />
      </Routes>
    </div>
  );
}

export default App;
