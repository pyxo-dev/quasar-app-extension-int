module.exports = function (api) {
  // Compatibility check.
  api.compatibleWith('@quasar/app', '>=3.0.0-beta.1 <4.0.0')
  api.compatibleWith('quasar', '>=2.0.0-beta.1 <3.0.0')
  api.compatibleWith('vue-i18n', '>=9.0.0 <10.0.0')

  // Render the templates in the app.
  if (api.prompts.typescript) {
    api.render('./templates')
  } else {
    api.render('../lib/templates')
  }
}
