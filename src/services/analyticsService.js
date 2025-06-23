// // src/services/analyticsService.js
// import { logEvent, getAnalytics } from 'firebase/analytics';
// import app from './firebase';

// let analytics;

// if (!__DEV__) {
//   analytics = getAnalytics(app);
// }

// export const trackEvent = (eventName, eventData = {}) => {
//   if (analytics) {
//     logEvent(analytics, eventName, eventData);
//   } else {
//     console.log(`[ANALYTICS] ${eventName}`, eventData);
//   }
// };
