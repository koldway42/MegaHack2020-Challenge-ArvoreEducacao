import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import Content from '../Content/Content'

import ContentRouter from "../../components/ContentRouter/ContentRouter"

import "./Dashboard.scss"

export default () => {
  return (
      <div className="Dashboard" id="Dashboard" >
            <Sidebar pageWrapId={"page-wrap"} outerContainerId={"Dashboard"} />
            <div id="page-wrap">
                <Content>
                    <ContentRouter />
                </Content>
            </div>
      </div>
  );
}