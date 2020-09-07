import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Avatar from '../Avatar'
import { CurrentUserContext } from '../CurrentUserContext'

export const NewPostArea = () => {
  const maxLetterCount = 280
  const [postContent, setPostContent] = useState('')
  const { state } = useContext(CurrentUserContext)
  const {
    currentUser: { avatarSrc },
  } = state

  const handleChange = ( e ) => {
    const content = e.target.value
    if(maxLetterCount - content.length >= 0)
      setPostContent(content)
  }

  const handleMeow = () => {
    // Add postContent to the feed.
  }
  

  return (
    <MainWrapper>
      <Header>Home</Header>
      <NewPostWrapper>
        <Row>
          <Avatar src={avatarSrc} />
          <PostArea
            maxlength={maxLetterCount}
            value={postContent}
            onChange={handleChange}
            placeholder="What's happening?"
          />
        </Row>
        <SubmitRow>
          <LetterCount>{maxLetterCount - postContent.length}</LetterCount>
          <PostBtn onClick={handleMeow}>Meow</PostBtn>
        </SubmitRow>
      </NewPostWrapper>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #f6f6f9;
`

const Header = styled.div`
  border-bottom: 1px solid #f6f6f9;
  padding: 15px;
  font-weight: 800;
  font-size: 22px;
`

const NewPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`

const PostArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: none;
  outline: none;
  font-family: 'Arial';
  font-size: 16px;
  height: 120px;
  resize: none;
`

const Row = styled.div`
  display: flex;
`

const SubmitRow = styled(Row)`
  justify-content: flex-end;
  margin-top: 5px;
`

const PostBtn = styled.button`
  font-size: 16px;
  color: white;
  background: #ad91fd;
  padding: 10px 15px;
  border-radius: 20px;

  &:hover {
    background: #4c00ff;
  }
`

const LetterCount = styled.span`
  padding-right: 15px;
  align-self: center;
  color: gray;
`
