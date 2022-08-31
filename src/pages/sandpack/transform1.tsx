import { Sandpack } from '@codesandbox/sandpack-react'
import './index.scss'

const scssCode = `
.onepx-border {
  width: 400px;
  height: 160px;
  margin: 0 auto;
  cursor: pointer;
  line-height: 160px;
  text-align: center;
  font-weight: bold;
  font-size: 50px;
  color: #f66;
  & + .onepx-border {
    margin-top: 50px;
  }
  &.normal {
    border: 1px solid #f66;
  }
  &.thin {
    position: relative;
    &::after {
      position: absolute;
      left: 0;
      top: 0;
      border: 1px solid #f66;
      width: 200%;
      height: 200%;
      content: "";
      transform: scale(.5);
      transform-origin: left top;
    }
  }
}
`

const code = `
import './App.scss'

export default function App() {
  return (
    <div class="transform-container" data-title="使用transform描绘像素边框">
      <div class="onepx-border normal">1px</div>
      <div class="onepx-border thin">0.5px</div>
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
