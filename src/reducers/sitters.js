const InitailBabySitters = {
  sitters: [
    {
      id: 10,
      ageOfChildren: 2,
      numberOfChildren: 1,
      feeInEuros: 12,
      experienceInYears: 2,
      location: 1
    }, {
      id: 11,
      ageOfChildren: 1,
      numberOfChildren: 2,
      feeInEuros: 6,
      experienceInYears: 3,
      location: 1
    }, {
      id: 12,
      ageOfChildren: 3,
      numberOfChildren: 3,
      feeInEuros: 12,
      experienceInYears: 5,
      location: 1
    }, {
      id: 13,
      ageOfChildren: 4,
      numberOfChildren: 4,
      feeInEuros: 8,
      experienceInYears: 8,
      location: 1
    }, {
      id: 14,
      ageOfChildren: 12,
      numberOfChildren: 2,
      feeInEuros: 15,
      experienceInYears: 3,
      location: 1
    }, {
      id: 15,
      ageOfChildren: 7,
      numberOfChildren: 1,
      feeInEuros: 10,
      experienceInYears: 1,
      location: 1
    }
  ]
}



const sitter = (state = InitailBabySitters, action = {}) => {
  switch (action.type) {
    default:
      return state
  }
}

export default sitter