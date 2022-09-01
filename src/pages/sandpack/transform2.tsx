import { Sandpack } from '@codesandbox/sandpack-react'
import './index.scss'

const scssCode = `
.heart {
  position: relative;
  width: 400px;
  height: 400px;
  background-color: #ff5d60;
  margin: 20% auto auto;
  transform: rotate(45deg);

  &::before,&::after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #ff5d60;
    border-radius: 100%;
    content: '';
  }

  &::before{
    transform: translateX(-50%);
  }

  &::after{
    transform: translateY(-50%);
  }
}
`

const code = `
import './App.scss'

export default function App() {
  return <div className="heart"></div>
}`

const Transform2 = () => {
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
export default Transform2
