# 이듬(E.UID) 블렌디드 러닝

1주차 오프라인(토) 학습 진행 내용 중, VS Code 에디터 설정 방법을 정리합니다.

> **참고**: [프리페어링, VS Code 포터블](https://xn--xy1bk56a.run/preparing-for-class/guidebook/Editor.html#%ED%8F%AC%ED%84%B0%EB%B8%94-%EB%AA%A8%EB%93%9C)

<br/>

## VS Code 확장

아래 VS Code 확장을 검색하여 설치합니다.

- LiveServer `개발 서버 구동`
- Comment Divider `코멘트 컬러 하이라이팅`
- Debugger for Chrome `Chrome 디버깅`
- Translator `한 ↔ 영 번역 전환`
- Image Preview `이미지 미리보기`
- SVG Viewer `SVG 미리보기`
- HTMLHint `HTML 검사`
- Prettier `코드 포맷터`
- Formatting Toggle `포맷터 ON/OFF`
- EditorConfig for VS Code `.editorcinfog 파일 자동 생성`

<br/>

## HTMLHint 패키지 설치

NPM 설치 명령을 사용해 HTMLHint 패키지를 글로벌 설치합니다. (Node.js 설치 필요)

```sh
$ npm i -g htmlhint
```

<br/>

## package.json

**설정** → **`package.json`** 파일을 열어 아래 코드를 추가한 후 저장합니다.

```jsonc
{
  // Emmet 설정
  "emmet.variables": {
    "charset": "UTF-8",
    "lang": "ko-KR"
  },
  "emmet.syntaxProfiles": {
    "tag_case": "lower",
    "attr_case": "lower",
    "attr_quotes": "double",
    "html": "xhtml",
    "self_closing_tag": "xhtml",
    "inline_break": 3,
  },

  // 에디터 설정
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.formatOnType": true,

  // Prettier 설정
  "prettier.printWidth": 80,
  "prettier.tabWidth": 2,
  "prettier.trailingComma": "es5",
  "prettier.useTabs": false,

  // 파일 자동 저장 설정
  "files.autoSave": "off",

    // JS 기본 포맷팅 설정
  "javascript.format.enable": false,

  // 파일별 설정
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features",
    "editor.formatOnSave": false
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": false
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },

  // 포맷팅 토글
  "formattingToggle.affects": [
    "formatOnPaste",
    "formatOnSave",
    "formatOnType"
  ],

  // HTML 유효성 검사 설정
  "html.validate.scripts": true,
  "html.validate.styles": true,

  // HTMLHint 설정
  "htmlhint.documentSelector": [
    "html",
    "htm"
  ],
  "htmlhint.options": {
    "alt-require": true,
    "attr-lowercase": false,
    "attr-no-duplication": true,
    "attr-unsafe-chars": true,
    "attr-value-double-quotes": true,
    "attr-value-not-empty": false,
    "doctype-first": true,
    "doctype-html5": true,
    "empty-tag-not-self-closed": true,
    "head-script-disabled": false,
    "href-abs-or-rel": false,
    "id-class-ad-disabled": true,
    "id-class-value": false,
    "id-unique": true,
    "inline-script-disabled": false,
    "inline-style-disabled": false,
    "space-tab-mixed-disabled": "space",
    "spec-char-escape": true,
    "src-not-empty": true,
    "style-disabled": false,
    "tag-pair": true,
    "tagname-lowercase": true,
    "title-require": true
  },
}
```

<br/>

## .editorconfig

에디터 구성 파일을 프로젝트 루트에 생성한 후, 다음과 같이 작성하고 저장합니다.

```sh
root = true

[*]
charset = utf-8
indent_size = 2
indent_style = space
trim_trailing_whitespace = false
insert_final_newline = false
```

<br/>

## .htmlhintrc

HTMLHint 구성 파일을 프로젝트 루트에 생성한 후, 다음과 같이 작성하고 저장합니다.

```json
{
  "doctype-first": true,
  "doctype-html5": false,

  "style-disabled": true,
  "head-script-disabled": true,
  "inline-style-disabled": false,
  "inline-script-disabled": false,

  "tagname-lowercase": true,
  "tag-self-close": true,
  "tag-pair": true,
  
  "attr-lowercase": true,
  "attr-value-double-quotes": true,
  "attr-value-not-empty": false,
  "attr-no-duplication": true,
  "attr-unsafe-chars": true,

  "id-unique": true,
  "id-class-value": "dash",
  "id-class-ad-disabled": false,

  "href-abs-or-rel": false,
  "title-require": false,
  "src-not-empty": true,
  "alt-require": true,

  "spec-char-escape": true,
  "space-tab-mixed-disabled": "space2",
}
```

<br/>

## .prettierrc

Prettier 구성 파일을 프로젝트 루트에 생성한 후, 다음과 같이 작성하고 저장합니다.

```json
{
  "semi": true,
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "es5",
  "arrowParens": "always",
  "bracketSpacing": true,
  "proseWrap": "preserve",
  "quoteProps": "consistent",
  "embeddedLanguageFormatting": "auto",
  "htmlWhitespaceSensitivity": "css",
  "jsxBracketSameLine": false,
  "jsxSingleQuote": false,
  "insertPragma": false,
  "requirePragma": false,
  "vueIndentScriptAndStyle": true
}
```