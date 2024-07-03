import { Button } from "./components/elements/button";
import { InputForm } from "./components/elements/input";
import { FormLogin } from "./components/fragments/FormLogin";
import { AuthLayout } from "./components/layouts/AuthLayout";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        {/* <LoginPage /> */}
        <RegisterPage />
      </div>
    </>
  );
}

export default App;
