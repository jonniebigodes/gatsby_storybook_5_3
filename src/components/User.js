import React from "react"
import styled from "styled-components"
const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`
const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`
const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`
const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`
const Excerpt = styled.p`
  margin: 0;
`
const User = ({userInfo}) => (
  <UserWrapper>
    <Avatar src={userInfo.avatar} alt="" />
    <Description>
      <Username>{userInfo.username}</Username>
      <Excerpt>{userInfo.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
)
export default User
