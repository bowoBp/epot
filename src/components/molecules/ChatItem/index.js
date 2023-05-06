import React from 'react';
import IsMe from './IsMe';
import Other from './Other';

const ChatItem = ({isMe, text, desc, photo}) => {
  if (isMe) {
    return <IsMe text={text} desc={desc} />;
  }
  return <Other text={text} desc={desc} photo={photo} />;
};

export default ChatItem;
