`npx prettier --write "**/*.js"`

```
자바스크립트 코드를 자동으로 정렬하기 위해서는 코드 포맷터를 사용하면 됩니다. 코드 포맷터는 코드의 스타일을 일관되게 유지하고 가독성을 높이기 위해 코드를 자동으로 정리해주는 도구입니다.

가장 대표적인 자바스크립트 코드 포맷터는 Prettier입니다. Prettier는 다양한 에디터와 IDE에서 사용할 수 있으며, 자동으로 코드를 정리해주기 때문에 개발자가 수동으로 코드를 정리할 필요가 없습니다.

Prettier를 사용하기 위해서는 먼저 Node.js를 설치해야 합니다. Node.js를 설치한 후, npm을 사용하여 Prettier를 설치할 수 있습니다. 다음 명령어를 사용하여 Prettier를 설치합니다.

css
Copy code
npm install --save-dev prettier
설치가 완료되면, 프로젝트의 루트 디렉토리에서 .prettierrc 파일을 생성하여 포맷팅 설정을 구성할 수 있습니다. 이 파일에서는 들여쓰기, 줄바꿈, 따옴표 등과 같은 코드 스타일을 구성할 수 있습니다.

예를 들어, 다음과 같이 .prettierrc 파일을 작성할 수 있습니다.

json
Copy code
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5"
}
이제 코드 포맷터를 실행하여 코드를 정리할 수 있습니다. 예를 들어, 다음 명령어를 사용하여 현재 디렉토리의 모든 .js 파일을 포맷팅할 수 있습니다.

perl
Copy code
npx prettier --write "**/*.js"
이렇게 하면 Prettier가 자동으로 코드를 정리하여 일관된 코드 스타일을 유지할 수 있습니다.
```

errors
Line 3: 'React' must be in scope when using JSX react/react-in-jsx-scope

https://uxicode.tistory.com/entry/React-Typescript-Error-%EC%82%AC%ED%95%AD%EB%93%A4
