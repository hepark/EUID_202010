import { makeShuffleFilterList } from './makeSuffleFilterList.js'

/* -------------------------------------------------------------------------- */
// 커링 사용 예
// makeShuffleFilterList(config)(cb)

const config = {
  list: Array(10)
    .fill(0)
    .map((x, y) => y + 1),
  displayCount: 3,
}

// 셔플 필터 리스트 생성
const suffleFilterList = makeShuffleFilterList(config)

// 셔플 필터 리스트 함수 실행 (중복되지 않는 아이템을 포함하는 리스트를 인자로 받음)
suffleFilterList((...args) => console.log(...args))
