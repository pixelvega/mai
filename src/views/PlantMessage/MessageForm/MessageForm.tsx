import {
  EmailInput,
  FileInput,
  TextArea,
  TextInput,
} from "../../../shared/Input/Input"

import css from "./MessageForm.module.scss"

const MessageForm = () => {
  return (
    <form className={css.form} onSubmit={(e) => e.preventDefault()}>
      <EmailInput id="recipients" label="Recipients" />
      <TextInput id="subject" label="Subject" />
      <TextArea id="message" label="Write a lovely message" />
      <FileInput id="file" label="Choose a picture or a video" />
      <button
        className={css.button}
        type="button"
        onClick={() => {
          console.log("send data")
        }}
      >
        ENVIAR
      </button>
    </form>
  )
}

export default MessageForm
