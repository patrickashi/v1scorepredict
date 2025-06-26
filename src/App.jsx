import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import FixturesAndPredictions from "./pages/fixtures_and_predictions";
import JoinLeague from "./pages/join_league";
import LoaderPage from "./pages/LoaderPage";
import Login from "./pages/Login";
import MyLeagues from "./pages/my_leagues";
import Predictions from "./pages/predictions";
import PrivateLeague from "./pages/private_league";
import Register from "./pages/Register";
import CreateLeague from "./pages/create_league";
import LeaderboardPage from "./pages/LeaderboardPage";
import UserProfilePage from "./pages/UserProfilePage";
// ...import other pages

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/fixtures_and_predictions" element={<FixturesAndPredictions />} />
          <Route path="/join_league" element={<JoinLeague />} />
          <Route path="/loader_page" element={<LoaderPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my_leagues" element={<MyLeagues />} />
          <Route path="/private_league" element={<PrivateLeague />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create_league" element={<CreateLeague />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          {/* ...other routes */}
        </Route>
        {/* ...auth routes, etc */}
      </Routes>
    </Router>
  );
}

export default App;