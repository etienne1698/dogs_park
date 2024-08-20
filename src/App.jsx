import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout"
import SignUp from "./pages/SignUp";
import Onboarding from "./pages/Onboarding";
import SignIn from "./pages/SignIn";
import PasswordForgot from "./pages/PasswordForgot";
import EmailCheck from "./pages/EmailCheck";
import PasswordReset from "./pages/PasswordReset";
import Welcome from "./pages/Welcome";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="*" element={<NotFound />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="passwordforgot" element={<PasswordForgot />} />
        <Route path="emailcheck" element={<EmailCheck />} />
        <Route path="passwordreset" element={<PasswordReset />} />
        <Route path="/welcome" element={<Welcome/>} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}