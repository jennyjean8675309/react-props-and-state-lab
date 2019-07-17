import React from 'react'

class Pet extends React.Component {
  determineGender = (gender) => {
    if (gender === 'female') {
      return '♀'
    } else {
      return '♂'
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/* { this.props.petObj.gender === 'female' ? '♀' : '♂' } */}
            {this.determineGender(this.props.petObj.gender)}
            {this.props.petObj.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.petObj.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petObj.age}</p>
            <p>Weight: {this.props.petObj.weight}</p>
          </div>
        </div>
        <div className="extra content">
        { this.props.petObj.isAdopted ? (
          <button className="ui disabled button">
            Already adopted
          </button>
        ) : (
          <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.petObj.id)} >Adopt pet</button>
        )
        }
        </div>
      </div>
    )
  }
}

export default Pet
