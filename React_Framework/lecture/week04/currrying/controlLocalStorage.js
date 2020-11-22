import { makeShuffleFilterList } from './makeSuffleFilterList.js'

/* -------------------------------------------------------------------------- */
// 로컬 스트로지 사용 예

const { localStorage } = window
const SHUFFLE_FILTER_LIST_ID = '__shuffleFilterListConfig__'

const loadStorage = (KEY) => localStorage.getItem(KEY)

const saveStorage = (KEY, filteredList, compareList, config) => {
  const jsonString = JSON.stringify({
    filteredList,
    compareList,
    config,
  })

  localStorage.setItem(KEY, jsonString)
}

// 셔플 필터 리스트 생성
const suffleFilterList = makeShuffleFilterList({
  list: Array(10)
    .fill(0)
    .map((x, y) => y + 1),
  displayCount: 3,
})

const __config__ = loadStorage(SHUFFLE_FILTER_LIST_ID)

if (!__config__) {
  // 셔플 필터 리스트 함수 실행 (중복되지 않는 아이템을 포함하는 리스트를 인자로 받음)
  suffleFilterList((...args) => {
    console.log(...args)
    // 로컬 스토리지에 저장
    saveStorage(SHUFFLE_FILTER_LIST_ID, ...args)
  })
} else {
  const config = JSON.parse(__config__)

  // 셔플 필터 리스트 생성
  const suffleFilterList = makeShuffleFilterList(config)

  suffleFilterList((...args) => {
    console.log(...args)
    // 로컬 스토리지에 저장
    saveStorage(SHUFFLE_FILTER_LIST_ID, ...args)
  })
}
