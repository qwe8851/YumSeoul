import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <p><Link to="/auth/signin">로그인</Link>하러 가기</p>
            <p><Link to="/auth/signup">회원가입</Link>하러 가기</p>
        </>
    );
}

export default HomePage;