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
import {Link} from 'react-router-dom'

import Cartao from '../card_rotas.js'



class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.clickCard1 = this.clickCard1.bind(this)
    this.state = {
    toCard: false
    }
  }
  
  clickCard1(){
    this.setState({
     toCard: true 
    })
  }


  render() {


    return (
      <div className="content">
        <Col xs={12} sm={6} md={6} lg={3}> 
              <Link to="/detalhe" className="nav-link btn-magnify">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                        <div className="numbers">
                          <CardTitle tag="p" className="text-center">Ação: Palestra</CardTitle>
                          <br></br>
                          <p className="text-justify pr-4 pl-4">Neste evento será ministrada uma palaestra sobre a prevenção do suicídio</p>
                        </div>
                    </Row>
                  </CardBody>
                </Card>
              </Link>
            </Col>

            <Col xs={12} sm={6} md={6} lg={3}> 
              <Link to="/detalhe" className="nav-link btn-magnify">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                        <div className="numbers">
                          <CardTitle tag="p" className="text-center">Precisamos de:</CardTitle>
                          <br></br>
                          <p className="text-left pl-4">5 - Panfletores</p>
                          <br></br>
                          <p className="text-left pl-4">Técnicos:</p>
                          <p className="text-left pl-4">1 - Psicólogo</p>
                          <p className="text-left pl-4">2 - Assistentes Sociais</p>
                        </div>
                    </Row>
                  </CardBody>
                </Card>
              </Link>
            </Col>

            <Row>
              <div className="update ml-auto mr-auto">
                <Button color="primary" round>Quero me Candidatar!</Button>
              </div>
            </Row>
      </div>
    );
  }
}

export default Dashboard;