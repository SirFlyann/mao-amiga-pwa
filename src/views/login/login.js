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
import { Redirect } from "react-router";
import { Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import FormInputs from "components/FormInputs/FormInputs.jsx";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      senha: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { login, senha } = this.state;
    axios
      .post("http://10.0.8.72:3001/login", {
        email: login,
        senha,
        tipo: "2"
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange(event) {
    const { target } = event;
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <div>
        <Col xs={12} sm={6} md={6} lg={3}>
          <Card className="card-stats login-card">
            <CardBody>
              <Row>
                <div className="numbers">
                  <CardTitle tag="p" className="text-center">
                    Login
                  </CardTitle>
                  <br />
                  <form>
                    <FormInputs
                      ncols={["col-md-4", "col-md-4"]}
                      proprieties={[
                        {
                          inputProps: {
                            type: "text",
                            placeholder: "Login",
                            className: "login-input ml-auto mr-auto",
                            name: "login",
                            onChange: this.handleChange,
                            value: this.state.login
                          }
                        },
                        {
                          inputProps: {
                            type: "text",
                            name: "senha",
                            placeholder: "Senha",
                            className: "login-input ml-auto mr-auto",
                            onChange: this.handleChange,
                            value: this.state.senha
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
            <Button color="primary" round onClick={() => this.handleClick()}>
              Acessar
            </Button>
          </div>
        </Row>
      </div>
    );
  }
}

export default Login;
