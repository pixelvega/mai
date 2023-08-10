import css from "./Modal.module.scss"

interface Props {
  title: string
  onAccept?: () => void
  onCancel?: () => void
}

const Modal = ({ title, onAccept, onCancel }: Props) => {
  return (
    <div>
      <div className={css.modalBox}>
        <h4>{title}</h4>
        <div className={css.buttonsContainer}>
          {onAccept && <button onClick={onAccept}>OK</button>}
          {onCancel && <button onClick={onCancel}>CANCEL</button>}
        </div>
      </div>
    </div>
  )
}

export default Modal
