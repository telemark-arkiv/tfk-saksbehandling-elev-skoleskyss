'use strict'

module.exports = {
  JWT_KEY: process.env.TFK_SES_JWT_KEY || 'Louie Louie, oh no, I got to go. Louie Louie, oh no, I got to go',
  CALLBACK_STATUS_MESSAGE: process.env.TFK_SES_CALLBACK_STATUS_MESSAGE || 'Søknad behandlet',
  JOB_DIRECTORY_PATH: process.env.TFK_SES_JOB_DIRECTORY_PATH || 'test/data/jobs',
  DISTRIBUTION_DIRECTORY_PATH: process.env.TFK_SES_DISTRIBUTION_DIRECTORY_PATH || 'test/data/distribution',
  ARCHIVE_DIRECTORY_PATH: process.env.TFK_SES_ARCHIVE_DIRECTORY_PATH || 'test/data/archive',
  DONE_DIRECTORY_PATH: process.env.TFK_SES_DONE_DIRECTORY_PATH || 'test/data/done',
  ERROR_DIRECTORY_PATH: process.env.TFK_SES_ERROR_DIRECTORY_PATH || 'test/data/errors',
  FARA_DIRECTORY_PATH: process.env.TFK_SES_FARA_DIRECTORY_PATH || 'test/data/fara',
  PDF_SERVICE_URL: process.env.TFK_SES_PDF_SERVICE_URL || 'https://pdftemplater.service.t-fk.no/',
  GOOGLE_API_KEY: process.env.TFK_SES_GOOGLE_API_KEY || 'your-google-api-key',
  fireBase: {
    databaseURL: process.env.FIREBASE_URL || 'https://seneca-firebase-test.firebaseio.com'
  }
}
