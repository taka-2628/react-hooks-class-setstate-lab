import React from "react";
import Item from "./Item";

class ShoppingList extends React.Component {
  state = {
    selectedCategory: "All"
  }
  
  handleCategoryChange(event) {
    // event.target.value will be the value selected by the user
    console.log(event.target.value)
    this.setState({selectedCategory: event.target.value});
  }
  
  render(){
    // we want to filter the items to only display the ones based on the selected category
    const itemsToDisplay = this.props.items.filter((item) => {
      if (this.state.selectedCategory === "All") return true;

      return item.category === this.state.selectedCategory;
    });

    return (
      <div className="ShoppingList">
        <div className="Filter">
          <select name="filter" onChange={(event) => this.handleCategoryChange(event)}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <ul className="Items">
          {itemsToDisplay.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
        </ul>
      </div>
    )
  }
}

export default ShoppingList;
