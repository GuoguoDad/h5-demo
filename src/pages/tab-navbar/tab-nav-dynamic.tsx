import { useState } from 'react'
import './tab-nav-dynamic.scss'

const TabNavDynamic = () => {
  const [colors] = useState(['#FF5D60', '#5B5FF8', '#FF8E29', '#0190F9'])
  const [select, setSelect] = useState(0)

  return (
    <div className="tab-navbar-2">
      <nav>
        {colors.map((v, index) => {
          return (
            <label key={`a_${index}`} onClick={() => setSelect(index)} className={index === select ? 'tab-active' : ''}>
              tab{index + 1}
            </label>
          )
        })}
      </nav>
      <main>
        {
          // @ts-ignore
          <ul style={{ '--tab-count': colors.length, '--tab-index': select }}>
            {colors.map((v, index) => {
              return (
                // @ts-ignore
                <li key={`li_${index}`} style={{ '--bg-color': v }}>
                  {index + 1}
                </li>
              )
            })}
          </ul>
        }
      </main>
    </div>
  )
}

export default TabNavDynamic
