export const footerQuery = `query MyQuery($locale: SiteLocale, $fallbackLocale: [SiteLocale!]) {
  footer(locale: $locale, fallbackLocales: $fallbackLocale) {
    subtitle
    socialMediaLinks {
      url
      name
      id
      icon {
        url
        height
        width
      }
    }
    links {
      slug
      title
      id
    }
  }
}`;
