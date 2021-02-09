import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";
import "./table.css";
import tableData from "./tabelData";

export class table extends Component {
  state = {
    data: tableData,
    typeChanger: false,
  };
  constructor(props: any) {
    super(props);
    this.typeChangeHandler = this.typeChangeHandler.bind(this);
  }
  firstType() {
    const { data } = this.state;
    return (
      <Table
        definition
        size="small"
        sortable
        textAlign="center"
        compact="very"
        celled
        color="blue"
        selectable
        singleLine
        structured
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            {data.coloumns.map((item) => (
              <Table.HeaderCell>{item.label}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.data.map(function (item) {
            return (
              <Table.Row>
                <Table.Cell>{item.row}</Table.Cell>
                {item.value.map((element) => (
                  <Table.Cell>{element}</Table.Cell>
                ))}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }

  secondType() {
    const { data } = this.state;
    let counter = -1;
    return (
      <Table
        definition
        size="small"
        sortable
        textAlign="center"
        compact="very"
        celled
        color="blue"
        selectable
        singleLine
        structured
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            {data.data.map((item) => (
              <Table.HeaderCell>{item.row}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.coloumns.map(function (item) {
            counter++;
            return (
              <Table.Row>
                <Table.Cell>{item.label}</Table.Cell>
                {data.data.map((ele) => (
                  <Table.Cell>{ele.value[counter]}</Table.Cell>
                ))}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }
  typeChangeHandler(this: any) {
    this.setState({
      typeChanger: !this.state.typeChanger,
    });
  }
  render() {
    return (
      <div id="table-style">
        <Button onClick={this.typeChangeHandler}>
          {this.state.typeChanger ? "Change to Style:1" : "Change to Style:2"}
        </Button>
        {this.state.typeChanger ? this.secondType() : this.firstType()}
      </div>
    );
  }
}

export default table;
