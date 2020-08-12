export default function (context) {
  const u = process.server ? context.req.headers['user-agent'] : navigator.userAgent

  const browser = u ? {
    versions: {
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      android: u.includes('Android') || u.includes('Linux'),
      iPhone: u.includes('iPhone'),
      iPad: u.includes('iPad'),
      jzb: u.includes('patriarch'),
      ios7: u.includes('iOS 7'),
      ios8: u.includes('iOS 8'),
      wechat: /micromessenger/i.test(u),
      iPhoneX: u.includes('iPhoneX')
    }
  } : false

  context.userAgent = browser
}
