import { NextRequest, NextResponse } from 'next/server'

const SUPPORTED_LOCALES = ['uk-UA', 'en-US']

export function middleware(request: NextRequest) {
  const { pathname, locale } = request.nextUrl

  if (SUPPORTED_LOCALES.includes(locale)) {
    return NextResponse.next()
  }

  const acceptLang = request.headers.get('accept-language') || ''
  const userLang = acceptLang.split(',')[0]

  let detectedLocale: 'uk-UA' | 'en-US' = 'en-US'
  if (userLang.startsWith('ru')) {
    detectedLocale = 'uk-UA'
  }

  const redirectUrl = new URL(`/${detectedLocale}${pathname}`, request.url)
  return NextResponse.redirect(redirectUrl)
}
