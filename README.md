## Unsplash Image API를 활용한 이미지 검색 사이트 만들기

### 개발환경

1. 프로젝트 환경설정(vite를 활용한 React 프로젝트) 설치: `npm create vite@latest`  
2. React 중앙집중식 상태관리 라이브러리 Recoil 설치: `npm i recoil`  
3. 외부 오픈 API 통신을 위한 라이브러리 axios 설치: `npm i axios`  
4. CSS 스타일링을 위한 SASS/SCSS 설치: `npm i sass --save-dev`  
5. page 처리 `npm i react-router-dom localforage match-sorter sort-by`  
6. nodejs 환경구축 `npm i @types/node`  
7. react toasts ui 사용 `npm i react-simple-toasts`  
8. 그 외 코드 정리  
`npm install --save-dev --save-exact prettier`  
--save-exact는 버전이 달라지면서 생기는 스타일의 변화를 막기 위해 사용  

    `npm install eslint-plugin-prettier --save-dev`  
    eslint-config-prettier: Prettier와 충돌할 설정들을 비활성화함  

    `npm install eslint-config-prettier --save-dev`  
    eslint-plugin-prettier : 코드 포맷할 때 Prettier를 사용하게 만드는 규칙을 추가

<br/><br/><br/>

vite.config.ts  
```
resolve: {
    alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
        '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
        '@recoil': fileURLToPath(new URL('./src/recoil', import.meta.url)),
        '@apis': fileURLToPath(new URL('./src/apis', import.meta.url)),
    },
},
// SCSS 전역 사용
css: {
    preprocessorOptions: {
        scss: {
            additionalData: `@import "./src/assets/common/main.scss`,
        },
    },
},
```

tsconfig.json  
```
"baseUrl": ".",
"paths": {
    "@/*": ["src/*"],
    "@assets/*": ["src/assets/*"],
    "@components/*": ["src/components/*"],
    "@pages/*": ["src/pages/*"],
    "@types/*": ["src/types/*"],
    "@recoil/*": ["src/recoil/*"],
    "@apis/*": ["src/apis/*"]
},
"noImplicitAny": false,
"strictNullChecks": false
```