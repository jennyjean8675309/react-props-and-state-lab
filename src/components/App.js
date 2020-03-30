import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  // remember that a callback prop is ALWAYS a function - the function has to be declared here, inside of App, because it needs access to App's this.state in order to update state

  // in React we use arrow functions to implicitly bind the value of 'this' - if you run into an error where 'this' is not defined, it most likely means that you're not using an arrow function

  onChangeType = (event) => {
    console.log('changing the filter type...')

    // this.state.filters.type = event.target.value
    // console.log('changing state...', this.state.filters.type)

    // you CAN just change state directly like this - HOWEVER, when you change state this way, React doesn't recognize the change and WILL NOT TRIGGER A RE-RENDER

    // you MUST use the setState() function to update state

    this.setState({
      filters: { type: event.target.value }
    })
  }

  onFindPetsClick = () => {
    console.log('on Find Pets was clicked...')

    let url = '/api/pets'

    if (this.state.filters.type !== 'all') {
      url = url + `?type=${this.state.filters.type}`
    }
    
    fetch(url)
    .then(resp => resp.json())
    .then(petData => this.setState({
      pets: petData
    }))
    .catch(error => {
      alert(`Error: ${error}`)
    })
  }

  onAdoptPet = (petId) => {
    console.log('adopting a pet...', petId)

    let updatedPets = this.state.pets.map(pet => {
      if (pet.id === petId) {
        // we can use the spread operator here to make our code more efficient
        return {...pet, isAdopted: true}
      } else {
        return pet
      }
    })

    this.setState({
      pets: updatedPets
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
