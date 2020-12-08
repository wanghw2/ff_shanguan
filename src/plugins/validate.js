// 修改密码的校验
export default function (rules, errMsg) {
  for (let key in rules) {
    let item = rules[key]
    if (item.required) {
      if (!this[key]) {
        errMsg && (this[errMsg] = item.required)
        this[key + 'Msg'] = item.required
        return false
      }
    }
    let list = rules[key].patterns || []
    for (let i = 0, len = list.length; i < len; i++) {
      if (!list[i].pattern.test(this[key])) {
        errMsg && (this[errMsg] = list[i].msg)
        this[key + 'Msg'] = list[i].msg
        return false
      }
    }
  }
  return true
}
