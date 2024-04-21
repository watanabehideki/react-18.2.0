import yup from "./yup.jp"
export const validateSchema = yup.object({
  name: yup.string().label("名前").required().max(20),
  gender: yup.string().label("性別").required(),
  email: yup.string().label("メールアドレス").required().email(),
  memo: yup.string().label("備考").required().min(10).ng(),
})
