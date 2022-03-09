import React from 'react'
import '../../styles/General.scss'

const MessageBlock = ({ h1, h2, h3, p }) => {

  return (
    <div className="messageBlock container d-flex align-items-center justify-content-center flex-column my-5" style={{ color: 'rgb(0 74 173)', paddingTop: '9rem', paddingBottom: '9rem', }}>
      {h1 && <h1 className={h2 && 'mb-3'}>{h1}</h1>}
      {h2 && <h2 className={h3 && 'mb-2'}>{h2}</h2>}
      {h3 && <h3 className={p && 'mb-1'}>{h3}</h3>}
      {p && <p>{p}</p>}
    </div>
  )
}

export default MessageBlock