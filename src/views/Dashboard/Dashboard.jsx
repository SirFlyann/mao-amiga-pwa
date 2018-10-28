import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
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
import axios from 'axios'

import Cartao from '../card_rotas.js'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vagas: []
    }

    this.createCards = this.createCards.bind(this)
  }

  componentWillMount() {
      axios.get('http://10.0.8.72:3001/vagas')
        .then((response) => {
          this.setState({ vagas: response.data })
        })
  }

  createCards() {
    const { vagas } = this.state
    return vagas.map((el) => {
      console.log(el)
      return (
              <Link to={`/detalhe/${el.id}`} className="nav-link btn-magnify">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col xs={5} md={4}>
                        <div className="icon-big text-center">
                        </div>
                      </Col>
                      <Col xs={7} md={8}>
                        <div className="numbers">
                          <CardTitle tag="p">{el.titulo}</CardTitle>
                          <p>{el.descricaovaga} </p>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Link>
        )
    })   
  }

  render() {
    console.log(this.state)
    return (
      <div className="content">
        <Row>
          {this.createCards()}
        </Row>
      </div>
    );
  }
}

export default Dashboard;