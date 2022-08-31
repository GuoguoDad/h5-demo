import { Sandpack } from '@codesandbox/sandpack-react'
import './index.scss'

const scssCode = `
.specified-scope {
  width: 300px;
  li {
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    &:nth-child(odd) {
      background-color: #f66;
    }
    &:nth-child(even) {
      background-color: #66f;
    }
    &:nth-child(n+6):nth-child(-n+10) {
      background-color: #3c9;
    }
  }
}
`

const code = `
import './App.scss'
export default function App() {
  return (
    <div data-title="使用:nth-child()选择指定元素">
      <ul className="specified-scope">
        <li>10001</li>
        <li>10002</li>
        <li>10003</li>
        <li>10004</li>
        <li>10005</li>
        <li>10006</li>
        <li>10007</li>
        <li>10008</li>
        <li>10009</li>
        <li>10010</li>
        <li>10011</li>
        <li>10012</li>
      </ul>
    </div>
  )
}`

const NthChild = () => {
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
export default NthChild
