// ----------------------------------------------------
// 날짜 객체를 사용하여 한국형 날짜 정보를 반환하는 함수 만들기
// ----------------------------------------------------
var getYear, getMonth, getDate, getDay, getHour, getMinute, getSecond, getMillisecond, getISOTime;

// 몇 년도인지 반환하는 함수
// 예: '2018' 또는 '2018년'
getYear = function(format){
  var date = new Date();
  if(!format){
    format = ''; 
  }
  return date.getFullYear() + format;
}
// 몇 월인지 반환하는 함수
// 예: '3' 또는 '3월'
getMonth = function (format){
  var date = new Date();
  if(!format){
    format = ''
  }
  return date.getMonth()+1 + format;
}
// 몇 일인지 반환하는 함수
// 예: '20' 또는 '20일'
getDate = function (format){
  var date = new Date();
  if(!format){
    format = ''
  }
  return date.getDate() + format;
}
// 몇 요일인지 반환하는 함수
// 예: '화' 또는 '화요일'
getDay = function (format){
  var date = new Date();
  var day = date.getDay();
  switch(day){
    case 0: day = "일";  
    break;
    case 1: day = "월";
    break;
    case 2: day = "화"; 
    break;
    case 3: day = "수"; 
    break;
    case 4: day = "목"; 
    break;
    case 5: day = "금"; 
    break;
    case 6: day = "토"; 
    break;

    default : "요일아님"

  }
  console.log(day);

  if(!format){
    format = ''
  }
  return day + format;
  
}
// 몇 시인지 반환하는 함수
// 예: '22' 또는 '22시'
getHour = function (format){
  var date = new Date();
  if(!format){
    format = ''
  }
  return date.getHours() + format;
}
// 몇 분인지 반환하는 함수
getMinute = function (format){
  var date = new Date();
  if(!format){
    format = ''
  }
  return date.getMinutes() + format;
}

// 몇 초인지 반환하는 함수
getSecond = function (format){
  var date = new Date();
  if(!format){
    format = ''
  }
  return date.getSeconds() + format;
}
// 몇 밀리초인지 반환하는 함수
// 예: '514' 또는 '514밀리초'

getMillisecond = function (format){
  var date = new Date();
  if(!format){
    format = ''
  }
  return date.getMilliseconds() + format;
}
// ISO 8601 문자 정보를 반환하는 함수
  // ISO 8601은 날짜와 시간과 관련된 데이터 교환을 다루는 국제 표준이다.
  // 이 표준은 국제 표준화 기구(ISO)에 의해 공포되었으며 1988년에 처음으로 공개되었다.
  // 이 표준의 목적은 날짜와 시간을 표현함에 있어 명백하고 잘 정의된 방법을 제공함으로써,
  // 날짜와 시간의 숫자 표현에 대한 오해를 줄이고자함에 있는데, 숫자로 된 날짜와 시간
  // 작성에 있어 다른 관례를 가진 나라들간의 데이터가 오갈때 특히 그렇다.
  // 참고: https://ko.wikipedia.org/wiki/ISO_8601

  getISOTime = function (format){
    var date = new Date();
    if(!format){
      format = ''
    }
    return date.toISOString() + format;
  }

// 일정한 주기(interval)마다 함수를 실행 (ms = milliseconds)
// window.setInterval(function, ms)

var today = el('.today');
var time = el('time', today);
var year = el('.year',today);
var month = el('.month',today);
var date = el('.date',today);
var day = el('.day',today);
var hours = el('.hours',today);
var minutes = el('.minutes',today);
var seconds = el('.seconds',today);
var milliseconds = el('.milliseconds',today);

console.log('today', today);
console.log('time', time);
console.log('year', year);
console.log('month', month);
console.log('date', date);
console.log('day', day);
console.log('hours', hours);
console.log('minutes', minutes);
console.log('seconds', seconds);
console.log('milliseconds',milliseconds);

function updateDateTimes(){
  time.setAttribute('datetime', getISOTime());
  year.textContent = getYear();
  month.textContent = getMonth();
  date.textContent = getDate();
  day.textContent = getDay();
  hours.textContent = getHour();
  minutes.textContent = getMinute();
  seconds.textContent = getSecond();
  milliseconds.textContent = getMillisecond();
}

updateDateTimes();
window.setInterval(updateDateTimes,1000)


function els(selector, context) {
  // selector 유형이 문자가 아니거나, selector 공백을 제거한 길이가 0일 경우 결과 값 null 반환
  if (typeof selector !== 'string' || selector.trim().length === 0) { return null; }
  // context 값이 존재하고, 노드 유형이 요소 노드(1)가 아니라면... context 변수에 el() 함수를 통해 문서 객체 참조.
  if (context && context.nodeType !== document.ELEMENT_NODE) { context = el(String(context)); }
  // context 값이 undefined, null 일 경우, context는 document 값을 참조.
  if (!context) { context = document; }
  return context.querySelectorAll(selector);
}

function el(selector, context) {
  if (typeof selector !== 'string' || selector.trim().length === 0) { return null; }
  if (context && context.nodeType !== document.ELEMENT_NODE) { context = el(String(context)); }
  if (!context) { context = document; }
  return context.querySelector(selector);
}
