/**
 * Created by DanielL on 16.11.2016.
 */

var config = {
  app: {
    options: {
      paths: {
        dist: '',
        temp: ''
      }
    },

    styles: {
      "app/styles/**/*.scss": {
        sass: {
          precision: 10
        }
      },

      "app/styles/**/*.css": {
        cssnano: {}
      }
    },

    scripts: {
      "./app/scripts/main.js": {
        babel: {}
      }
    }
  },

  browserSync: {
    notify: false,

    // Customize the Browsersync console logging prefix
    logPrefix: 'WSK',
    // Allow scroll syncing across breakpoints
    scrollElementMapping: ['main', '.mdl-layout'],

    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    https: false,

    server: ['.tmp', 'app'],
    port: 3000
  }
};

module.exports = config;
