export const shuffle = (array) => array.slice().sort(() => Math.random() - 0.5)

/**
 * 셔플 필터 리스트: 커링(커리 함수)
 * @param {Object} config { 배열, 표시 개수 }
 */
export const makeShuffleFilterList = ({
  list,
  displayCount,
  compareList: cList,
  filteredList: fList,
}) => {
  // 비교 리스트
  let compareList = cList || list.slice()
  // 필터 리스트
  let filteredList = fList || []

  // 반환 함수 (클로저)
  return (callback) => {
    // 비교 리스트의 개수가 표시 개수보다 크거나 같은 경우
    if (compareList.length >= displayCount) {
      // 리스트 셔플
      let shuffledList = shuffle(compareList)
      // 리스트 업데이트
      filteredList = shuffledList.filter((x, y) => y < displayCount)
      compareList = shuffledList.filter((x, y) => y >= displayCount)
    } else {
      // 나머지 개수
      const restCount = displayCount - compareList.length
      filteredList = compareList.slice() // 남은 아이템 복사
      compareList = list.slice().filter((item) => !compareList.includes(item)) // 남은 아이템을 제외하고 걸러내기
      // 리스트 업데이트
      filteredList = [
        ...filteredList,
        ...compareList.filter((x, y) => y < restCount),
      ]
      compareList = compareList.filter((x, y) => y >= restCount)
    }
    // 콜백 함수 실행
    callback(filteredList, compareList, { list, displayCount })
  }
}
