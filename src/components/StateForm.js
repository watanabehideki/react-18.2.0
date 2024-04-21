import React, { useState } from "react"

export default function StateForm() {
  const [form, setForm] = useState({
    name: "",
    age: 0,
  })

  const handleForm = (event) => {
    setForm(({ ...rest }) => {
      return { ...rest, [event.target.name]: event.target.value }
    })
  }

  const onSubmit = () => {
    console.log(`こんにちは、${form.name} （${form.age}歳）さん！`)
  }
  return (
    <form>
      <div>
        <label htmlFor="name">名前</label>
        <input
          id="name"
          type="text"
          value={form.name}
          name="name"
          onChange={handleForm}
        />
      </div>
      <div>
        <label htmlFor="age">年齢</label>
        <input
          id="age"
          type="number"
          value={form.age}
          name="age"
          onChange={handleForm}
        />
      </div>
      <div>
        <button type="button" onClick={onSubmit}>送信</button>
      </div>
      <p>
        こんにちは、{form.name} （{form.age}歳）さん！
      </p>
    </form>
  )
}
