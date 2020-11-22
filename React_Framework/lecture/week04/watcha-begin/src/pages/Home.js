import { useState, useEffect } from 'react'
import { HeaderContainer, IndicatorsContainer } from 'containers'

const { PUBLIC_URL } = process.env

/* -------------------------------------------------------------------------- */

const Home = () => {
  // 상태
  const [indicators, setIndicators] = useState([])

  // 사이드 이펙트
  useEffect(() => {
    fetch(`${PUBLIC_URL}/api/sectionList.json`)
      .then((response) => response.json())
      .then((json) => setIndicators(json))
      .catch((error) => console.error(error.message))
  }, [])

  return (
    <>
      <HeaderContainer />
      <IndicatorsContainer list={indicators} />
    </>
  )
}

export default Home
