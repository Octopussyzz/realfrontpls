/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col, Button,
    UncontrolledTooltip
} from "reactstrap";
import Audience from "../components/Audience";

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row className="justify-content-center">
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Manage Audiences</CardTitle>
                  <Button className="btn-sm btn-round btn-success" href="/admin/audience"><i className="fa fa-plus"/> New Audience</Button>
                </CardHeader>
                <CardBody>
                  <ul className="list-unstyled team-members">
                    <Audience/>
                  </ul>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
