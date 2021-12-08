stringLength = (str) => {
  return str.length >= 1 && str.length <= 10 ? str.length : 'error';
};

module.exports = stringLength;
