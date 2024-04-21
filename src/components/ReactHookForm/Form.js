import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { validateSchema } from "./validateSchema"

export const Form = () => {
  const defaultValues = {
    name: "",
    email: "",
    gender: "male",
    memo: "",
  }

  //フォーム初期化
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues, resolver: yupResolver(validateSchema) })

  const inputItems = [
    {
      uuid: crypto.randomUUID(),
      fieldId: "name",
      type: "text",
      labelName: "名前",
    },
    {
      uuid: crypto.randomUUID(),
      fieldId: "gender",
      type: "radio",
      labelName: "性別",
      value: "male",
      displayValue: "男性",
    },
    {
      uuid: crypto.randomUUID(),
      fieldId: "gender",
      type: "radio",
      labelName: "性別",
      value: "female",
      displayValue: "女性",
    },
    {
      uuid: crypto.randomUUID(),
      fieldId: "gender",
      type: "radio",
      labelName: "性別",
      value: "other",
      displayValue: "それ以外",
    },
    {
      uuid: crypto.randomUUID(),
      fieldId: "email",
      type: "email",
      labelName: "メールアドレス",
    },
    {
      uuid: crypto.randomUUID(),
      fieldId: "memo",
      labelName: "備考",
    },
  ]

  //サブミット時の処理
  const onSubmit = (data) => console.log(data)
  const onError = (err) => console.log(err)
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
      {inputItems.map((item) => {
        const {
          uuid,
          fieldId,
          labelName,
          type,
          value,
          displayValue,
        } = item
        return (
          <React.Fragment key={uuid}>
            <div>
              <label htmlFor={fieldId}>{labelName} :</label>
              <br />
              {type === ("text" || "emai") ? (
                <input id={fieldId} type={type} {...register(fieldId)} />
              ) : type === "radio" ? (
                <label>
                  <input
                    id={fieldId}
                    type={type}
                    value={value}
                    {...register(fieldId)}
                  />
                  {displayValue}
                </label>
              ) : (
                <textarea id={fieldId} {...register(fieldId)} />
              )}
              <div>{errors[fieldId]?.message}</div>
            </div>
          </React.Fragment>
        )
      })}
      <div>
        <button type="submit">送信</button>
      </div>
    </form>
  )
}
