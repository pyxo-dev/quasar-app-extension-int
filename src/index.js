module.exports = function (api) {
  api.extendQuasarConf((conf) => {
    // Register the boot file.
    conf.boot.unshift('~src/extensions/int/boot')
  })
}
