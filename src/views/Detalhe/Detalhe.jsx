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

import axios from "axios";
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.jsx";

import { Redirect } from "react-router";
import { Router, Route, Switch, withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import Cartao from "../card_rotas.js";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vaga: {
        titulo: "",
        descricaovaga: ""
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const id = this.props.location.pathname.split("/")[2];
    axios.get("http://10.0.8.72:3001/vagas/" + id).then(response => {
      this.setState({
        vaga: response.data[0]
      });
    });
  }

  handleClick() {
    const id = this.props.location.pathname.split("/")[2];
    axios.post("http://10.0.8.72:3001/candidato", {
      id_voluntario: 1,
      id_vaga: id
    });
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
                    <CardTitle tag="p" className="text-center">
                      {this.state.vaga.titulo}
                    </CardTitle>
                    <br />
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
                    <p className="text-justify pr-4 pl-4">
                      {this.state.vaga.descricaovaga}
                    </p>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Link>
        </Col>

        <Row>
          <div className="update ml-auto mr-auto">
            <Link to="/dashboard" className="nav-link btn-magnify">
              <Button color="primary" round onClick={() => this.handleClick()}>
                Quero me Candidatar!
              </Button>
            </Link>
          </div>
        </Row>
      </div>
    );
  }
}

export default withRouter(Dashboard);
