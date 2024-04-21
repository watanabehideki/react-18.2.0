import * as yup from "yup"

yup.addMethod(yup.string, "ng", function () {
  return this.test(
    "ng",
    ({ label }) => `${label}にNGワードがあります。`,
    (value) => {
      const ngwords = ["死"]
      for (const ng of ngwords) {
        if (value.includes(ng)) {
          return false
        }
      }
      return true
    }
  )
})

/**
 * @type {yup.LocaleObject}
 */
const jpLocale = {
  mixed: {
    required: (param) => `${param.label}は必須入力です。`,
  },
  string: {
    min: (param) =>
      `${param.label}は${param.min}文字以上でなければなりません。`,
    max: (param) =>
      `${param.label}は${param.max}文字以下でなければなりません。`,
    email: (param) =>
      `${param.label}はメールアドレスの形式でなければなりません。`,
  },
}

yup.setLocale(jpLocale)
export default yup
