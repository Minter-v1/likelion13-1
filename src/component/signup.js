import React, { useState } from 'react';
import axios from 'axios'; 
import './signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, id, password, confirmPassword } = formData;
    
    // 폼 검증
    if (!name || !id || !password) {
      setError('모든 항목을 입력해주세요.');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    const url = ""; 
    
    try {
      setLoading(true);
      const response = await axios.post(url, {
        name,
        id,
        password
      });
      
      console.log('서버 응답:', response.data);
      alert('회원가입이 완료되었습니다!');
      
      setFormData({
        name: '',
        id: '',
        password: '',
        confirmPassword: ''
      });
      
    } catch (error) {
      console.error('회원가입 오류:', error);
      setError(error.response?.data?.message || '회원가입 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-box">
        <h2>회원가입</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="이름"
              disabled={loading}
            />
          </div>
          
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="비밀번호"
              disabled={loading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">비밀번호 확인</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="비밀번호 확인"
              disabled={loading}
            />
          </div>
          
          <button type="submit" disabled={loading}>
            {loading ? '처리 중...' : '가입하기'}
          </button>
        </form>
        
        <p className="login-link">
          이미 계정이 있으신가요? <a href="/">로그인</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;