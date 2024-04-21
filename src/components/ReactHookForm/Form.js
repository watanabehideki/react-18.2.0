import React from "react"
import { useForm } from "react-hook-form"

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
    } = useForm({ defaultValues })

  const inputItems = [
    {
      uuid: crypto.randomUUID(),
      fieldId: "name",
      type: "text",
      labelName: "名前",
      validateItem: {
        ...register("name", {
          required: "名前は必須入力です。",
          maxLength: {
            value: 20,
            message: "名前は20文字以内にしてください。",
          },
        }),
      },
    },
    {
      uuid: crypto.randomUUID(),
      fieldId: "gender",
      type: "radio",
      labelName: "性別",
      validateItem: {
        ...register("gender", {
          required: "性別は必須入力です。",
        }),
      },
      value: "male",
      displayValue: "男性",
    },
    {
      uuid: crypto.randomUUID(),
      fieldId: "gender",
      type: "radio",
      labelName: "性別",
      validateItem: {
        ...register("gender", {
          required: "性別は必須入力です。",
        }),
      },
      value: "female",
      displayValue: "女性",
    },
    {
      uuid: crypto.randomUUID(),
      fieldId: "gender",
      type: "radio",
      labelName: "性別",
      validateItem: {
        ...register("gender", {
          required: "性別は必須入力です。",
        }),
      },
      value: "other",
      displayValue: "それ以外",
    },
    {
      uuid: crypto.randomUUID(),
      fieldId: "email",
      type: "email",
      labelName: "メールアドレス",
      validateItem: {
        ...register("email", {
          required: "メールアドレスは必須入力です。",
          pattern: {
            value: /([a-zd+-.]+)@([a-zd-]+(?:.[a-z]+)*)/i,
            message: "メールアドレスの形式が不正です。",
          },
        }),
      },
    },
    {
      uuid: crypto.randomUUID(),
      fieldId: "memo",
      labelName: "備考",
      validateItem: {
        ...register("memo", {
          required: "備考は必須入力です。",
          minLength: {
            value: 10,
            message: "備考は10文字以上にしてください。",
          },
        }),
      },
    },
  ]


  //サブミット時の処理
  const onSubmit = (data) => console.log(data)
  const onError = (err) => console.log(err)
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
      {inputItems.map((item) => {
        const { uuid, fieldId, labelName, type, validateItem, value, displayValue } =
          item
        return (
          <React.Fragment key={uuid}>
            <div>
              <label htmlFor={fieldId}>{labelName} :</label>
              <br />
              {type === ("text" || "emai") ? (
                <input id={fieldId} type={type} {...validateItem} />
              ) : type === "radio" ? (
                <label>
                  <input
                    id={fieldId}
                    type={type}
                    value={value}
                    {...validateItem}
                  />
                  {displayValue}
                </label>
              ) : (
                <textarea id={fieldId} {...validateItem} />
              )}
              <div>{errors[fieldId]?.message}</div>
            </div>
          </React.Fragment>
        )
      })}
      <div><button type="submit">送信</button></div>
    </form>
  )
}
