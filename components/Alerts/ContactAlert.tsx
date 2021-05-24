import { useState } from 'react'


export default function ContactAlert(showAlert) {
  const [show, setShow] = useState(showAlert);

  return (
    <>
      {show ? (
        <div className="bg-green-200 border-green-600 text-green-600 border-l-4 p-4" role="alert">
          <div className="flex justify-between">
            <div>
              <p className="font-bold">
                Success
              </p>
            </div>
            <div>
              <button
                className="bg-transparent text-2xl font-semibold leading-none outline-none focus:outline-none"
                onClick={() => setShow(false)}
              >
                <span>×</span>
              </button>
            </div>
          </div>
          <span>
            You're message has been sent!
          </span>
        </div>
      ) : null}
    </>
  )
}
