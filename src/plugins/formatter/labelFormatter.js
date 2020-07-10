export default {
  gender: function (value, show) {
    const label = value === 'M' ? '男' : (value === 'F' ? '女' : '')
    return (show && label ? value + ' - ' : '') + label
  }
}
