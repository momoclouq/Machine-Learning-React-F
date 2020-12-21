import './App.css';
import Home from './components/Home/Home';

//using react-router
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import types from Algorithm
import RegressionAlgorithm from "./components/Algorithm/Types/LinearRegression/LinearRegressionAlgorithm";
import LogisiticAlgorithm from "./components/Algorithm/Types/LogisticRegression/LogisticRegressionAlgorithm";
import NeuralNetworkAlgorithm from "./components/Algorithm/Types/NeuralNetworkAlgorithm";
import KMeanClusteringAlgorithm from "./components/Algorithm/Types/KMeanAlgorithm";
import KNearestNeighborAlgorithm from "./components/Algorithm/Types/KNearestNeighborAlgorithm";
import ObjectDetectionAlgorithm from "./components/Algorithm/Types/ObjectDetectionAlgorithm";

//import component for scrolling control
import ScrollToTop from "./components/Common/ScrollToTop";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <ScrollToTop/>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/chapter1">
                <RegressionAlgorithm />
              </Route>

              <Route path="/chapter2">
              <LogisiticAlgorithm />
              </Route>

              <Route path="/chapter3">
                <NeuralNetworkAlgorithm/>
              </Route>

              <Route path="/chapter4">
                <ObjectDetectionAlgorithm/>
              </Route>

              <Route path="/chapter5">
                <KNearestNeighborAlgorithm/>
              </Route>

              <Route path="/chapter6">
                <KMeanClusteringAlgorithm/>
              </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
