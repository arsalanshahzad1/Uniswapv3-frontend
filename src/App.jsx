import { React } from "react";
import "./App.css";
import "./Responsive.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Trade from "./Components/Trade";
import PoolNew from "./Components/Poolnew";
import Explore from "./Components/Explore";
import ExploreTokens from "./Components/ExploreTokens";
import ExploreTransactions from "./Components/ExploreTransactions";
import ExplorePools from "./Components/explorePools";
import NewPosition from "./Components/NewPosition";
import PoolDetailPage from "./Components/PoolDetailPage";
import TokenDetailPage from "./Components/TokenDetailPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/pool" element={<PoolNew />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/tokens" element={<ExploreTokens />} />
          <Route path="/transactions" element={<ExploreTransactions />} />
          <Route path="/explore-pools" element={<ExplorePools />} />
          <Route path="/new-positions" element={<NewPosition />} />
          <Route path="/pools-detail" element={<PoolDetailPage />} />
          <Route path="/token-detail" element={<TokenDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
