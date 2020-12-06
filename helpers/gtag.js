export const GA_TRACKING_ID = 'UA-40600692-2'
export const GA_TRACKING_GID = 'G-LNDKYQHR93'
export const GT_MANAGER_ID = 'GTM-MKJQTJ3'
// Analytics 4 🚀 https://support.google.com/analytics/answer/9744165

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const trackPageView = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
