import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BrowserMultiFormatReader, NotFoundException } from "@zxing/library"
import Modal from "../../shared/Modal/Modal"

// TODO: error when device is not allowed
const Start = () => {
  const [error, setError] = useState<any>()
  const [videoDevices, setVideoDevices] =
    useState<{ label: string; deviceId: string }[]>()
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>()

  const [showModal, setShowModal] = useState(false)

  const navigate = useNavigate()

  const codeReader = useMemo(() => new BrowserMultiFormatReader(), [])

  const getDevices = useCallback(async () => {
    if (!codeReader) return
    try {
      const videoInputDevices = await codeReader.listVideoInputDevices()
      if (videoInputDevices.length > 0)
        setSelectedDeviceId(videoInputDevices[0].deviceId)
      console.log(videoInputDevices)
      setVideoDevices(
        videoInputDevices.map(({ label, deviceId }: MediaDeviceInfo) => ({
          label,
          deviceId,
        }))
      )
    } catch (error) {
      console.error(error)
      setError(error)
    }
  }, [codeReader])

  useEffect(() => {
    getDevices()
  }, [getDevices])

  const inputVideoRef = useRef<HTMLVideoElement>(null)

  const handleClickStart = useCallback(() => {
    codeReader.decodeFromVideoDevice(
      selectedDeviceId ?? null,
      inputVideoRef?.current,
      (result, err) => {
        if (err && !(err instanceof NotFoundException)) {
          console.error(err)
          return codeReader.reset()
        }
        if (result) {
          console.log(result)
          codeReader.reset()
          // TODO validate qr
          setShowModal(true)
        }
      }
    )
  }, [codeReader, selectedDeviceId, inputVideoRef])

  const handleAcceptLocation = () => {
    navigate("/send-message")
  }

  const handleCancelLocation = () => {
    setShowModal(false)
  }

  return (
    <>
      <div>
        <video
          ref={inputVideoRef}
          width="300"
          height="200"
          style={{ border: "1px solid gray" }}
        ></video>
      </div>
      <div>
        <div>
          <select
            value={selectedDeviceId}
            onChange={(e) => setSelectedDeviceId(e.target.value)}
          >
            {videoDevices?.map(({ label, deviceId }) => (
              <option key={deviceId} value={deviceId}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <button onClick={handleClickStart} disabled={error}>
          START
        </button>
      </div>
      {showModal && (
        <Modal
          title="Confirm location"
          onAccept={handleAcceptLocation}
          onCancel={handleCancelLocation}
        />
      )}
    </>
  )
}

export default Start
