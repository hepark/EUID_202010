var while_condition = true;
var count = 0;
var break_point = 10;
var inner_count = 0;

// 레이블값이 하는 역할은?
loopCount: while (while_condition) {
  ++count;

  if (count === 3 || count === 7) {
    continue;
  }

  while (true) {
    inner_count++;
    if (inner_count === break_point / 2) {
      break loopCount;
    }
    console.log('inner_count:', inner_count); // inner_count값이 출력안됨
  }

  if (count === 6) {
    break loopCount;
  }

  console.log('count;', count);

  if (count >= break_point) {
    while_condition = false;
  }
}
