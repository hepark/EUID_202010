const { PUBLIC_URL } = process.env

/* -------------------------------------------------------------------------- */

export const FETCH_HOME_DATA = 'FETCH_HOME_DATA'
export const FETCH_HOME_DATA_ERROR = 'FETCH_HOME_DATA_ERROR'

/* -------------------------------------------------------------------------- */

export const fetchHomeData = () => async (dispatch) => {
  try {
    const sectionListData = await (
      await fetch(`${PUBLIC_URL}/api/sectionList.json`)
    ).json()

    const wallpaperListData = await (
      await fetch(`${PUBLIC_URL}/api/wallpaperList.json`)
    ).json()

    dispatch({
      type: FETCH_HOME_DATA,
      payload: {
        sections: sectionListData,
        wallpapers: wallpaperListData,
      },
    })
  } catch (error) {
    dispatch({ type: FETCH_HOME_DATA_ERROR, payload: error })
  }
}
