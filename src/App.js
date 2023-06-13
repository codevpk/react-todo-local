import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle";
import { useAuthContext } from 'contexts/AuthContext';
import Routes from "pages/Routes"

function App() {

  const { isAppLoading } = useAuthContext()

  if (isAppLoading)
    return (
      <div className="loader-container">
        <span class="loader"></span>
      </div>
    )

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
