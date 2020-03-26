import React from 'react';
import { WhatsappShareButton, TwitterShareButton, TelegramShareButton, FacebookShareButton, WhatsappIcon, TwitterIcon, TelegramIcon, FacebookIcon } from 'react-share'

export default () => {
  const url = "https://menotaif.codandomuito.com.br";
  const message = "Saca só que massa, dá pra a gente ver quanto precisa tirar pra passar!"

  return (
    <div>
      <p>Compartilhe com a galera!</p>
      <div id="social-row">
        <WhatsappShareButton url={url} title={message} >
          <WhatsappIcon />
        </WhatsappShareButton>
        <TwitterShareButton url={url} title={message}>
          <TwitterIcon />
        </TwitterShareButton>
        <TelegramShareButton url={url} title={message}>
          <TelegramIcon />
        </TelegramShareButton>
        <FacebookShareButton url={url} title={message}>
          <FacebookIcon />
        </FacebookShareButton>
      </div>
    </div>
  )
}