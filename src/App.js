import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import NavBar from "./components/NavBar";
import PopularMovie from "./components/PopularMovie";
import TopRatedMovie from "./components/TopRatedMovie";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import { theme } from "./reduxStore/theme";
import { ThemeProvider } from "styled-components";
import { styledComponentTheme } from "./styledComponents";
import Login from "./components/Login";
import Profile from "./components/Profile";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  const theme_info = useSelector((state) => state.theme);

  useEffect(() => {
    theme_info === "white"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme_info]);

  return (
    <div>
      <ThemeProvider theme={styledComponentTheme[theme_info]}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="popular-movie" element={<PopularMovie />} />
          <Route path="top-rated-movie" element={<TopRatedMovie />} />
          <Route path="/:movieId" element={<Detail />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
