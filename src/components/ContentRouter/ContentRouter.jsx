import React from 'react';

import { Switch, Route } from "react-router-dom"

import ProfileRoute from "../../routes/ProfileRoute"
import SeasonRoute from "../../routes/SeasonRoute"
import ReadingListRoute from "../../routes/ReadingListRoute"
import CatalogRoute from "../../routes/CatalogRoute"


function routes() {
  return (
    <Switch>
        <Route exact path="/dashboard" component={ProfileRoute} />
        <Route exact path="/dashboard/season" component={SeasonRoute} />
        <Route exact path="/dashboard/catalog" component={CatalogRoute} />
        <Route exact path="/dashboard/readingList" component={ReadingListRoute} />
    </Switch>
  );
}

export default routes;