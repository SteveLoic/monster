import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monters: users }));
  }

  handleChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { searchField, monters } = this.state;
    const filteredMonsters = monters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Bigelow Rules",
            fontSize: "72px",
            color: "#0ccac4",
          }}
        >
          Monsters Rolodex
        </h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
