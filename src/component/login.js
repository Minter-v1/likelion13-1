import React, { useState } from 'react'
import axios from 'axios'
import './main.css';

function Login() {
    //id,pw 입력
    const [formData, setFormData] = useState({
        id: '',
        pw: ''
    });
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { id, pw } = formData;

        // 폼 검증
        if (!id || !pw) {
            setError('모든 항목을 입력해주세요.');
            return;
        }

        //url 입력
        const url = "";

        try {
            setLoading(true);
            const response = await axios.post(url, {
                id,
                pw
            }
            )
            console.log('로그인 성공')
            alert('로그인되었습니다~')
        }
        catch (error) {
            console.log('로그인 오류', error);
            setError(error.response?.data?.message || '로그인 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }

    }

    return (
        <div className="login-container">
            <div className="login-form-box">
                <h2>로그인</h2>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="id">아이디</label>
                        <input
                            type="text"
                            name="id"
                            value={formData.id}
                            onChange={handleChange}
                            placeholder="아이디"
                            disabled={loading}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">비밀번호</label>
                        <input
                            type="password"
                            name="pw"
                            value={formData.pw}
                            onChange={handleChange}
                            placeholder="비밀번호"
                            disabled={loading}
                        />
                    </div>

                    <button type="submit" disabled={loading}>
                        {loading ? '처리 중...' : '로그인'}
                    </button>
                </form>

                <p className="signup-link">
                    계정이 없으신가요? <a href="/signup">회원가입</a>
                </p>
            </div>
        </div>
    )
}


export default Login