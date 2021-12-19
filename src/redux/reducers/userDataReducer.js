const initialState = {
   about: {
      name: '',
      dob: '',
      phone: 0,
      education: '',
      institute: '',
      instituteAddress: '',
      description: '',
      workExperience: ''
   },
   location: {
      country: '',
      state: '',
      city: '',
      pincode: 0,
      language: {
         English: false,
         Hindi: false,
         Other: false,
      }
   },
   skills: {
      category: '',
      subCategory: '',
   }
}

const userDataReducer = (state=initialState, action) => {
   const { type, payload } = action;
   switch (type) {
      case 'ADD_ABOUT':
         return {...state, about: payload};
      case 'ADD_LOCATION':
         return {...state, location: payload};
      case 'ADD_SKILLS':
         return {...state, skills: payload};
      default:
         return state;
   }
}

export default userDataReducer;