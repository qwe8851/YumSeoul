# 🤔 YumSeoul
`react`, `reduxjs/toolkit`, `styled-components`와 `nodejs`, `mongoDB`를 이용한 배달앱입니다. 
<br /> 메인 페이지와 로그인, 로그아웃
<br /> YumSeoul배달에 입점되어있는 스토어들과 선택된 스토어의 자세한 정보를 확인하고, 장바구니에 추가해서 한번에 주문할 수 있는 배달앱 `YumSeoul`입니다 ☺️

<br /><br /><br />

## ✨ 사용된 기술스택
`react` `react-router` `react-redux` `reduxjs/toolkit` `styled-components`
<br/>
<br/> `node.js` `mongodb`, `mongoose`
<br/> `nodemailer` : stmp 전송
<br/> `multer-s3`, `bucket` : aws-s3에 이미지 저장
<br/> `jsonwebtoken` : 로그인 토큰
<br/> `bcrypt` : 비밀번호 암호화

<br /><br /><br />

### build 방법
**Step 1️⃣ yum-seoul의 react project로 이동해주세요.**
> ```
> cd yum-seoul-project
> ```

<br /> 

**Step 2️⃣ yum-seoul-project의 의존성을 설치해주세요**
> ```
> yarn install
> ```
> or
> ```
> npm install
> ```



<br /> 

**Step 3️⃣ build를 진행해주세요.**
> ```
> yarn run build
> ```
> or
> ```
> npm run build
> ```

<br />

**Step 3️⃣ node.js 서버를 띄우고 확인해주세요. **
> ```
> yarn servers.js 
> ```
> or
> ```
> node start servers.js
> ```
> nodemon설치 시에는 `nodemon servers.js`를 입력해주세요 :)

<br /><br /><br />

### 구현 상세
비밀번호 암호화 bcrypt
- 단방향 해시 함수로 암호화만 가능, 로그인 시 사용자가 입력한 비밀번호를 bcrypt.compare()함수를 사용해서 암호화한 후 db의 저장된 비번과 비교해 일치여부 확인

1. aws s3에 이미지 업로드 
2. 이미지 url을 클라이언트로 응답 
3. 클라이언트에서 경로와 함께 다른 텍스트 정보들을 서버에 전달
4. 서버에서 db에 정보를 저장

crypto로 비밀번호 재설정을 위한 인증코드 생성
nodemailer로 비밀번호 재설정을 위한 smtp 전송 구현 
<br /><br /><br />

### 사용 기술스택
`react`
<br/> `react-router`
<br/> `react-redux`, `reduxjs/toolkit`
<br/> `styled-components`
<br/>
<br/> `mongodb`, `mongoose`
<br/> `node.js`
<br/> `multer-s3`, `bucket` : aws-s3에 이미지 저장
<br/> `jsonwebtoken` : 로그인 토큰
<br/> `bcrypt` : 비밀번호 암호화
<br/> `nodemailer` : stmp 전송

<br /><br /><br />
