module.exports = function (api) {
  api.extendQuasarConf((conf) => {
    conf.build.transpileDependencies.push(/@pyxo\/(w|v|q)int/)
  })
}
