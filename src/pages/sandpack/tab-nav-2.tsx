import { Sandpack } from '@codesandbox/sandpack-react'
import './index.scss'

const scssCode = `
ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
}

.tab-active {
  color: white;
  background-color: #2fc490;
}
.tab-navbar-2 {
  display: flex;
  flex-direction: column-reverse;
  width: 400px;
  height: 500px;
  margin: auto;
  margin-top: 20%;
  overflow: hidden;
  border-radius: 18px;
  nav {
    display: flex;
    height: 60px;
    line-height: 60px;
    background-color: #eeeeee;
    label {
      flex: 1;
      text-align: center;
      cursor: pointer;
      transition: all 300ms;
    }
  }
  main {
    flex: 1;
    ul {
      --tab-width: calc(var(--tab-count) * 100%);
      --tab-move: calc(var(--tab-index) / var(--tab-count) * -100%);

      display: flex;
      flex-wrap: nowrap;
      width: var(--tab-width);
      height: 100%;
      transition: all 300ms;
      transform: translateX(var(--tab-move));
      li {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        font-weight: bold;
        color: white;
        background-color: var(--bg-color);
      }
    }
  }
}
`

const code = `
import { useState } from 'react'
import './App.scss'

export default function App() {
  const [colors] = useState(['#FF5D60', '#5B5FF8', '#FF8E29', '#0190F9'])
  const [select, setSelect] = useState(0)
  
  return (
    <div className="tab-navbar-2">
      <nav>
        {colors.map((v, index) => {
          return (
            <label key={\`a_{index}\`} onClick={() => setSelect(index)} className={index === select ? 'tab-active' : ''}>
              tab{index + 1}
            </label>
          )
        })}
      </nav>
      <main>
        {
          <ul style={{ '--tab-count': colors.length, '--tab-index': select }}>
            {colors.map((v, index) => {
              return (
                <li key={\`li_{index}\`} style={{ '--bg-color': v }}>
                  {index + 1}
                </li>
              )
            })}
          </ul>
        }
      </main>
    </div>
  )
}`

const TabNavbar = () => {
  return (
    <div className="container">
      <Sandpack
        options={{
          editorWidthPercentage: 50,
          editorHeight: 'calc(100vh - 200px)',
          showTabs: true,
          showLineNumbers: true,
          showRefreshButton: true,
          showNavigator: true
        }}
        template="react-ts"
        files={{
          '/App.scss': scssCode,
          '/App.tsx': code
        }}
      />
    </div>
  )
}
export default TabNavbar
