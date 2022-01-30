import React from "react";

class PeopleForm extends React.Component {
  state = { searchTerm: "", savedValue: [] };
  componentDidMount() {}
  componentDidUpdate() {}
  addSearchTerm() {
    this.setState({
      savedValue: [this.state.savedValue, ` ${this.state.searchTerm},`],
    });
  }
  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.addSearchTerm();
            this.setState({ searchTerm: "" });
          }}
        >
          <label>The People's form!</label>
          <input
            type="text"
            value={this.state.searchTerm}
            onClick={(e) => {
              console.log(e.target.value);
            }}
            onChange={(e) => {
              this.setState({ searchTerm: e.target.value.toUpperCase() });
            }}
          ></input>
          Search queries listed in order here: {this.state.savedValue}
        </form>
      </div>
    );
  }
}

export default PeopleForm;
