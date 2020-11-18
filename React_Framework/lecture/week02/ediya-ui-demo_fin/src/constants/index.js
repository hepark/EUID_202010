const PUBLIC = process.env.PUBLIC_URL
const API_ADDRESS = `${PUBLIC}/api`

export const API = {
  navigation: `${API_ADDRESS}/navigation.json`,
  footer: `${API_ADDRESS}/footer.json`,
  home: `${API_ADDRESS}/home.json`,
}

/* -------------------------------------------------------------------------- */

export const BREAKPOINTS = 768

/* -------------------------------------------------------------------------- */

export const CLASSES = {
  currentPage: 'is--selected',
  activeClass: 'is-active',
}

/* -------------------------------------------------------------------------- */
