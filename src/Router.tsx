import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RootPage } from "./features/RootPage";
import { WeatherPage } from "./features/WeatherPage/WeatherPage";

export const Router = () => {
  return <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <RootPage />
      </Route>
      <Route path="/:id">
        <WeatherPage />
      </Route>
    </Switch>
  </BrowserRouter>
}