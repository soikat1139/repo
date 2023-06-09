
import { BingChat } from'bing-chat'

async function example() {
  const api = new BingChat({
    cookie:"1IqxRdmssuGw7X3nyrHQ1kNkwfw_dt2ZoydJbTdYoUWtpgI7XBYVvpSB3GaI_9nMpjcPuVYi2BqIFdaTP_FeXTbVDfZSAcRdxW6ufpBRu4yO62PzIhe2jHt_bh0Gnl_SrGMoDdIMAre8mKMJhWoafaDBbp9O03FMdi6F6GUjnfpsms7JkHr1IJomMSoFH-XmY5eVDg-WO2E75EzZQ7yYopm9SMHpzsYYygJdelnRlX0I"
  })

  const res = await api.sendMessage('500 gm miniature rice price in bangladesh')
  console.log(res.text)
}

example()