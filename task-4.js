capitalize = (str) => {
  str = str.split('');
  str[0] = str[0].toUpperCase();
  return str.join('');
};
module.exports = capitalize;
console.log(capitalize('cap'));
