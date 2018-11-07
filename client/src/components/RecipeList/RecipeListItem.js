import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import axios from "axios";
import "./RecipeStyle.css"
import FaveButt from "../FaveButt/FaveButt";
import {Button} from "react-bootstrap";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call

class RecipeListItem extends React.Component{

  constructor(props) {
    super(props);
    this.showRecipe = this.showRecipe.bind(this);
    
  }
  state = {
    loading: false,
    recipeInstructions: null,
    recipeIngredients: null,
  }


  showRecipe(evt) {
    evt.preventDefault();
    this.setState({loading: true}, () => {
      axios.get(`/api/recipes/${this.props.id}`)
      .then(resp => {
        console.log('we are here', resp.data.analyzedInstructions[0].steps)
        this.setState({recipeInstructions: resp.data.analyzedInstructions[0].steps, loading: false, recipeIngredients: resp.data.extendedIngredients})
      }).catch(err => {
        alert(err);
      })
    })
  }

  addFave(evt) {
    evt.preventDefault();
    const id = this.props.id;
    axios.post('/auth/profile/:userId', id)

  }

  renderShowRecipe() {
    if (this.state.loading) {
      return <p>Loading...</p>
    }

    if (this.state.recipeInstructions === null) {
      return <a rel="noreferrer noopener" className="recipelink" href='javascript:;' target="_blank" onClick={this.showRecipe}>
            Show recipe!
          </a>
    } 
    // return ('hello')
    return (
      <div>
        <Col className="ingredients" size="sm-6">
        <h4>Ingredients: </h4>
          {this.state.recipeIngredients.map((ingredient) => {
          return <p 
            key={ingredient.id}>
            <li>{ingredient.original}</li></p>
        })}
        </Col>
        <Col size="sm-6">
        <h4>Instructions:</h4>
        {this.state.recipeInstructions.map((instruction, i) => {
          return <p key={instruction.number}>
            <li>{instruction.step}</li>
          </p>
        })}
        </Col>
        
      </div>
    )
  }

  render() {
    const props=this.props;
    console.log(this.state.recipeInstructions);
    return (
      <li className="list-group-item">
        <Container>
          <Row>
            <h2 className="foodtitle text-center">{props.title}</h2>
          </Row>
          <Row>
            <Col size="sm-2">
              <Thumbnail src={props.image || "https://placehold.it/300x300"} />
             <Button onClick={props.FaveClick} userId={props.UserId}id={props.ButtonId} imgUrl={props.imgUrl}>favorite</Button>
            </Col>
            <Col size="sm-9" className="recipelink">
              {this.renderShowRecipe()}
            </Col>
          </Row>
        </Container>
      </li>
    )
    
  }
}

export { RecipeListItem }