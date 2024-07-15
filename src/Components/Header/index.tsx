import React from 'react';
import * as S from './style'
import Logo from '@/assets/Logo';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  return (
    <S.Layout>
      <S.Logo onClick={() => navigate("/")}>
        <Logo />
      </S.Logo>
      <S.ElementLayout>
        <S.Nav>
          <S.NavElement to="/">홈</S.NavElement>
          <S.NavElement to="/check">신청내역 수정/확인</S.NavElement>
          <S.NavElement to="/add">기상송 신청</S.NavElement>
        </S.Nav>
        <S.UserNav>
          <S.NavElement to="/login">로그인</S.NavElement>
          {/* <S.DevideBar>|</S.DevideBar>
          <S.NavElement to="">회원가입</S.NavElement> */}
        </S.UserNav>
      </S.ElementLayout>
    </S.Layout>
  );
};

export default Header;