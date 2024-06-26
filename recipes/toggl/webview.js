function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Ferdium => {
  const updateBadge = function updateBadge() {
    Ferdium.injectJSUnsafe(_path.default.join(__dirname, 'webview-unsafe.js'));
  };

  Ferdium.loop(updateBadge);
};
