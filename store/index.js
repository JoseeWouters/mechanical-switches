import Vuex from 'vuex'
import switchesData from 'js-yaml-loader!~/static/switchesData.yml';
import filterOptions from 'js-yaml-loader!~/static/filterOptions.yml'

const createStore = () => {
  return new Vuex.Store({
    state: {
        switchesData,
        filterOptions
    }
  })
}

export default createStore