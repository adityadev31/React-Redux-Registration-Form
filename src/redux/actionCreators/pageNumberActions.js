import { addAbout, addLocation, addSkills } from './userDataActions'

export const nextPage = ({type, data}) => {
   return (dispatch) => {
      if(type==='about') dispatch(addAbout(data));
      else if(type==='location') dispatch(addLocation(data));
      else if(type==='skill') dispatch(addSkills(data));
      dispatch({
         type: 'NEXT_PAGE',
         payload: '',
      });
   }
}

export const prevPage = () => {
   return {
      type: 'PREV_PAGE',
      payload: '',
   }
}