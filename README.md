# YumSeoul

<br /><br /><br />

### build 방법
1. `cd yum-seoul-project`
2. `npm run build`
3. `nodemon servers.js (node servers.js)`
<br /><br /><br />

### 구현 상세
비밀번호 암호화 bcrypt
- 단방향 해시 함수로 암호화만 가능, 로그인 시 사용자가 입력한 비밀번호를 bcrypt.compare()함수를 사용해서 암호화한 후 db의 저장된 비번과 비교해 일치여부 확인

1. aws s3에 이미지 업로드 
2. 이미지 url을 클라이언트로 응답 
3. 클라이언트에서 경로와 함께 다른 텍스트 정보들을 서버에 전달
4. 서버에서 db에 정보를 저장

crypto로 비밀번호 재설정을 위한 인증코드 생성
nodemailer로 비밀번호 재설정을 위한 stmp 전송 구현 
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