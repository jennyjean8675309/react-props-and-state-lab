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

  onChangeType = (event) => {
    // console.log('changing state for the filter type...', event.target.value)
    // this function is being passed as a callback prop to Filters
    // inside of Filters, this function is being passed as the callback function for the onChange event listener placed on the select tag
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {
    // console.log('finding pets...')
    // where does it make sense to place the event listener for this function???
    let url;
    if (this.state.filters.type === "all") {
      url = '/api/pets'
    } else {
      url = `/api/pets?type=${this.state.filters.type}`
    }
    // I use the filters type that is stored in state to know which url I should be fetching to
    fetch(url)
    .then(resp => resp.json())
    .then(petsData => this.setState({
      pets: petsData
    }))
    // when I get that information back from the 'server' I store that information (an array of pet objects) in state as pets
    // then, all of those pets that I've fetched get passed down as props to the PetBrowser component
  }

  onAdoptPet = (id) => {
    console.log('adopting a pet...', id)
    // here, I map over the array of pets that I have stored in state, for every pet, I simple return the pet if it isn't the one I'm looking for, when I do find the pet that I'm looking for, I first change it's adoption status, then returnt the pet
    let updatedPets = this.state.pets.map( pet => {
      if (pet.id === id) {
        pet.isAdopted = true
        return pet
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
              <Filters onChangeType={this.onChangeType} onFindPets={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App