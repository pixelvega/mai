import css from "./Input.module.scss"

interface Props {
  id: string
  name?: string
  label: string
}

export const TextInput = ({ id, name, label }: Props) => {
  return (
    <label htmlFor={id} className={css.label}>
      <span className={css.labelText}>{label}</span>
      <input type="text" name={name ?? id} id={id} />
    </label>
  )
}

export const EmailInput = ({ id, name, label }: Props) => {
  return (
    <label htmlFor={id} className={css.label}>
      <span className={css.labelText}>{label}</span>
      <input type="email" name={name ?? id} id={id} />
    </label>
  )
}

export const TextArea = ({ id, name, label }: Props) => {
  return (
    <label htmlFor={id} className={css.label}>
      <span className={css.labelText}>{label}</span>
      <textarea name={name ?? id} id={id} />
    </label>
  )
}
export const FileInput = ({ id, name, label }: Props) => {
  // TODO: add accept extensions
  return (
    <label htmlFor={id} className={css.label}>
      <span className={css.labelText}>{label}</span>
      <input type="file" name={name ?? id} id={id} />
    </label>
  )
}
