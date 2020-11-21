// 배열 → 복사(원본 보호) → 정렬 → 새로운 배열 반환
const sortArray = (compareFn, array) => array.slice().sort(compareFn)
const currySortArray = (compareFn) => (array) => array.slice().sort(compareFn)

const orgArray = [3, 2, 7, 10, -11]

// 오름차순 정렬
sortArray((z, k) => z - k, orgArray)

// 내림차순 정렬
sortArray((z, k) => k - z, orgArray)

const ascSortArray = currySortArray((z, k) => z - k)
const descSortArray = currySortArray((z, k) => k - z)

ascSortArray(orgArray) // 오름차순 정렬
descSortArray(orgArray) // 내림차순 정렬
