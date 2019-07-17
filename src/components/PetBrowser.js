import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  generatePets = (petsArray) => {
    return petsArray.map(pet => {
      return <Pet petObj={pet} onAdoptPet={this.props.onAdoptPet} />
    })
  }

  render() {
    return <div className="ui cards">{this.generatePets(this.props.pets)}</div>
  }
}

export default PetBrowser
