export const addAbout = (aboutData) => {
   return {
      type: 'ADD_ABOUT',
      payload: aboutData,
   }
}

export const addLocation = (locationData) => {
   return {
      type: 'ADD_LOCATION',
      payload: locationData,
   }
}

export const addSkills = (skillsData) => {
   return {
      type: 'ADD_SKILLS',
      payload: skillsData,
   }
}