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

.beauty-radio {
  display: flex;
  margin-left: 20%;
  margin-top: 10%;

  li {
    display: flex;
    align-items: center;
    list-style: none;

    + li{
      margin-left: 40px;
    }

    input:checked + label {
      background-color: green;
      border: 1px solid green;
    }

    label {
      padding: 5px;
      width: 30px;
      height: 30px;
      margin-right: 10px;
      border: 1px solid lightgrey;
      border-radius: 100%;
      background-clip: content-box;
      transition: all 300ms;
    }

    span {
      font-size: 40px;
    }
  }
}
`

const code = `
import './App.scss'

export default function App() {
  return (
    <ul className="beauty-radio">
      <li>
        <input id="man" type="radio" name="gender" hidden defaultChecked />
        <label htmlFor="man" />
        <span>男</span>
      </li>
      <li>
        <input id="woman" type="radio" name="gender" hidden />
        <label htmlFor="woman" />
        <span>女</span>
      </li>
    </ul>
  )
}`

const BeautyRadio = () => {
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
export default BeautyRadio
