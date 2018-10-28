import React from "react";
import { Card, CardHeader, CardBody, CardTitle, CardFooter, Row, Col } from "reactstrap";

import CardAuthor from "components/CardElements/CardAuthor.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import damirBosnjak from "assets/img/damir-bosnjak.jpg";
import mike from "assets/img/mike.jpg";
import ayoOgunseinde2 from "assets/img/faces/ayo-ogunseinde-2.jpg";
import joeGardner2 from "assets/img/faces/joe-gardner-2.jpg";
import clemOnojeghuo2 from "assets/img/faces/clem-onojeghuo-2.jpg";

class User extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md={8} xs={12}>
            <Card className="card-user">
              <CardBody>
                <form>
                  <FormInputs
                    ncols={["col-md-4", "col-md-4"]}
                    proprieties={[
                      {
                        label: "Nome",
                        inputProps: {
                          type: "text",
                          placeholder: "Nome"
                        }
                      },
                      {
                        label: "CPF",
                        inputProps: {
                          type: "number",
                          placeholder: "CPF"
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-4"]}
                    proprieties={[
                      {
                        label: "RG",
                        inputProps: {
                          type: "number",
                          placeholder: "RG"
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-4", "col-md-4"]}
                    proprieties={[
                      {
                        label: "Endereço",
                        inputProps: {
                          type: "text",
                          placeholder: "Endereço"
                        }
                      },
                      {
                        label: "Religião",
                        inputProps: {
                          type: "number",
                          placeholder: "Religião"
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-4", "col-md-4"]}
                    proprieties={[
                      {
                        label: "Sexo",
                        inputProps: {
                          type: "text",
                          placeholder: "Sexo"
                        }
                      },
                      {
                        label: "Escolaridade",
                        inputProps: {
                          type: "text",
                          placeholder: "Escolaridade"
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-4"]}
                    proprieties={[
                      {
                        label: "Estado Civil",
                        inputProps: {
                          type: "text",
                          placeholder: "Estado Civil"
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-4", "col-md-4"]}
                    proprieties={[
                      {
                        label: "Profissão",
                        inputProps: {
                          type: "text",
                          placeholder: "Profissão"
                        }
                      },
                      {
                        label: "Data de Nascimento",
                        inputProps: {
                          type: "number",
                          placeholder: "Data de Nascimento"
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-4"]}
                    proprieties={[
                      {
                        label: "Telefone",
                        inputProps: {
                          type: "number",
                          placeholder: "Telefone"
                        }
                      }
                    ]}
                  />
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button color="primary" round>Atualizar Cadastro</Button>
                    </div>
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default User;
