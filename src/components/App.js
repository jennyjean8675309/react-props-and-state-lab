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
    // change this.state.filters.type
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {
    let url = '/api/pets'
    // if (this.state.filters.type === 'all') {
    //   null
    // } else {
    //   url = `${url}?type=${this.state.filters.type}`
    // }
    this.state.filters.type === 'all' ? null : url = `${url}?type=${this.state.filters.type}`
    fetch(url)
    .then(resp => resp.json())
    .then(petsData => this.setState({
      pets: petsData
    }))
  }

  onAdoptPet = (id) => {
    console.log('adopting pet...', id)
    // need to iterate through this.state.pets, find the pet I'm looking for, and change its isAdopted status to true, and update state
    // map over this.state.pets
    let updatedPets = this.state.pets.map( pet => {
      if (id === pet.id) {
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
              <PetBrowser onAdoptPet={this.onAdoptPet} petsData={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App