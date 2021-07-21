import { Toaster } from "react-hot-toast";
import Routes from "./routes/index";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
    <div><Toaster/></div>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
