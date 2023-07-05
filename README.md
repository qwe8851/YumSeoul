# YumSeoul

cd yum-seoul-project
npm run build
nodemon servers.js (node servers.js)

비밀번호 암호화 bcrypt
- 단방향 해시 함수로 암호화만 가능, 로그인 시 사용자가 입력한 비밀번호를 bcrypt.compare()함수를 사용해서 암호화한 후 db의 저장된 비번과 비교해 일치여부 확인

1. aws s3에 이미지 업로드 
2. 이미지 url을 클라이언트로 응답 
3. 클라이언트에서 경로와 함께 다른 텍스트 정보들을 서버에 전달
4. 서버에서 store db에 정보를 저장

로그인 토큰 : jsonwebtoken