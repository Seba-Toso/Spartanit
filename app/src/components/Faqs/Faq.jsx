import React, { useCallback, useEffect, useState } from 'react'

const Faq = ({ question, response, index }) => {

  const [isCollapsed, setIsCollapsed] = useState(false)

  const setCollaps = useCallback(() => {
    return index === 0 ? setIsCollapsed(true) : null
  }, [index])

  useEffect(() => {
    setCollaps()
  }, [setCollaps])

  return (
    <li data-aos="fade-up">
      <div className='faq-header'>
        <i className="bi bi-question-circle icon-help"></i>
        <button type='button' data-bs-toggle="collapse" className={`collapse btn-clear ${isCollapsed ? 'active' : ''}`} data-bs-target={`#faq-list-${index}`} aria-expanded="false" aria-controls={`faq-list-${index}`} onClick={() => setIsCollapsed(!isCollapsed)}>
          {question}
          {isCollapsed && <i className="bi bi-chevron-up"></i>}
          {!isCollapsed && <i className="bi bi-chevron-down"></i>}
        </button>
      </div>
      <div id={`faq-list-${index}`} className={`collapse ${index === 0 ? 'show' : ''}`} data-bs-parent=".faq-list">
        <p>
          {response}
        </p>
      </div>
    </li>
  )
}

export default Faq