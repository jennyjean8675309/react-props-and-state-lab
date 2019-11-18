import React from 'react'

class Pet extends React.Component {
  render() {
    let {id, name, type, age, weight, gender, isAdopted} = this.props.petObj
    // here I'm using destructuring to break out my PetObj in more user-friendly variables
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            { gender === "female" ? '♀' : '♂' }
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          { isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button className="ui primary button" onClick={() => this.props.onAdoptPet(id)}>Adopt pet</button>
          ) }
        </div>
      </div>
    )
  }
}

export default Pet
