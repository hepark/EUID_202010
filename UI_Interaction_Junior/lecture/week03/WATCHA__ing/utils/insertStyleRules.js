// insertStyleRules() : 동적으로 스타일 규칙 추가

var insertStyleRules = (function(style){
  'use strict';
  
  var sheet = document.head.appendChild(style).sheet;

  // 클로저 함수
  return function(selector, rules) {
    var cssRulesString = Object.keys(rules)
      .map(function (key) {
        var value = rules[key]
        return key + ':' + value
      })
      .join(';')
    
    sheet.insertRule(
      selector + '{' + cssRulesString + '}',
      sheet.cssRules.length
    )
  };
  
})(document.createElement('style')); // <style></style>
