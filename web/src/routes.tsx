import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";
import Orphanages from "./pages/Orphanage";
import CreateOrphanages from "./pages/CreateOrphanage";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/app" component={OrphanagesMap} />

      <Route exact path="/orphanages/create" component={CreateOrphanages} />
      <Route exact path="/orphanages/:id" component={Orphanages} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
