import React from 'react'

class Pet extends React.Component {

  // here, I've used destructuring to separate out the keys of my pet object to use as variables - this keeps my code more DRY, as otherwise, I would have to type out this.props.pet.gender, this.props.pet.name, etc., each time that I wanted to access a value
  
  render() {
    let {id, name, type, age, weight, gender, isAdopted} = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === 'male' ? '♂ ' : '♀ '}
            {/* { remember, in JSX we have to use ternary statements in order to conditionally render things - an ordinary if/else statement would not work } */}
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
          {/* {if you need to write a ternary that is more than one line long, use () to add multiple lines and keep your code more clean} */}
          { isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button className="ui primary button" onClick={() => this.props.onAdoptPet(id)}>Adopt pet</button>
            // { just as with vanilla JS, we can pass information to a callback function by refactoring our code so that the callback is an anonymous arrow function in which we invoke the function inside with an argument }
          ) } 
        </div>
      </div>
    )
  }
}

export default Pet
