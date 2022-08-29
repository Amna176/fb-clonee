import "./App.css";
import Sidebar from "./components/App-body/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Feed from "./components/App-body/Feed/Feed";
import Widgets from "./components/App-body/Widgets/Widgets";
import Login from "./components/Login/Login";

function App() {
  const user = null;

  return (
    <div className="app">
  {!user ? (
        <Login/>
      ):(
      <>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </>
      )}
    </div>
  );
}

export default App;
