import Router from "./shared/Router";
import GlobalStyle from "./GlobalStyle";
import { ToastContainer, Bounce } from "react-toastify";
function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
}

export default App;
