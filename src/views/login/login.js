import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Button
} from "reactstrap";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// function that returns a color based on an interval of numbers

import Stats from "components/Stats/Stats.jsx";

import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.jsx";

import { Redirect } from 'react-router';
import { Router, Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom'
import FormInputs from "components/FormInputs/FormInputs.jsx";
const Login = (props) =>{
	return(
		<div>

            <Col xs={12} sm={6} md={6} lg={3}> 
                <Card className="card-stats login-card">
                  <CardBody>
                    <Row>
                        <div className="numbers">
                          <CardTitle tag="p" className="text-center">Login</CardTitle>
                          <br></br>
                          <form>
			                  <FormInputs
			                    ncols={["col-md-4", "col-md-4"]}
			                    proprieties={[
			                      {
			                        inputProps: {
			                          type: "text",
			                          placeholder: "Login",
			                          className: "login-input ml-auto mr-auto"
			                        }
			                      },
			                      {
			                        inputProps: {
			                          type: "text",
			                          placeholder: "Senha",
			                          className: "login-input ml-auto mr-auto" 
			                        }
			                      }
			                    ]}
			                  />
			              </form>
                        </div>
                    </Row>
                  </CardBody>
                </Card>
            </Col>

            <Row>
              <div className="update ml-auto mr-auto">
                <Button color="primary" round>Acessar</Button>
              </div>
            </Row>

      </div>
		)
}

export default Login;