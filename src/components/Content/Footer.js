import React from 'react';
import SOCIAL_SHARING from '../../constants/socialSharing';
import { WhatsappShareButton, TwitterShareButton, TelegramShareButton, FacebookShareButton, WhatsappIcon, TwitterIcon, TelegramIcon, FacebookIcon } from 'react-share'

export default () => {
  return (
    <div>
      <p>Compartilhe com a galera!</p>
      <div id="social-row">
        <WhatsappShareButton url={SOCIAL_SHARING.url} title={SOCIAL_SHARING.message} >
          <WhatsappIcon />
        </WhatsappShareButton>
        <TwitterShareButton url={SOCIAL_SHARING.url} title={SOCIAL_SHARING.message}>
          <TwitterIcon />
        </TwitterShareButton>
        <TelegramShareButton url={SOCIAL_SHARING.url} title={SOCIAL_SHARING.message}>
          <TelegramIcon />
        </TelegramShareButton>
        <FacebookShareButton url={SOCIAL_SHARING.url} title={SOCIAL_SHARING.message}>
          <FacebookIcon />
        </FacebookShareButton>
      </div>
    </div>
  )
}