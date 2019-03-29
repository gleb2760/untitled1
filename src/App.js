import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment';
import styled from 'styled-components';
import Incomes from "./Incomes";
import Expanse from "./Expanse";

const DateButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
const Nav = styled.nav`
  display:flex;
  justify-content:center;
  font-size:25px;
  padding:40px 0 15px;
`;
const Link = styled.span`
  cursor:pointer;
  color:white;
  Border-bottom:${({selected})=>selected?'2px solid white':'none'};
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
    date: moment(),
      navSelected:'incomes',
    };
  }
  handleSubstractDay = () => {
    this.setState({date:this.state.date.add(1,"day")});
  };
  handleSubstract = () => {
    this.setState({date:this.state.date.subtract(1,"day")});
  };
  handleNavClick = event => {
    this.setState({navSelected:event.target.getAttribute('name')});
  };
  render() {

    const {date,navSelected} = this.state;

    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{date.format('DD.MM.YY')}</p>
          <DateButton onClick = {this.handleSubstractDay}>+</DateButton>
          <DateButton onClick = {this.handleSubstract}>-</DateButton>
          <main>
            <Nav>
              <Link
                name="expanse"
                onClick={this.handleNavClick}
                selected={navSelected==='expanse'}>
                расходы
              </Link>
              <Link
                  name="incomes"
                  onClick={this.handleNavClick}
                  selected={navSelected==='incomes'}>
                Доходы
              </Link>

            </Nav>
            {navSelected === 'expanse' ? <Expanse /> : <Incomes/>}
          </main>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
