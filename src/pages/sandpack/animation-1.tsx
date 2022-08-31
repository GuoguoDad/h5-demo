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

.strip-loading {
  width: 400px;
  height: 400px;
  margin: 10% auto auto;

  ul {
    width: 100%;
    height: 60px;
    display: flex;

    li {
      --time: calc(var(--index) * 100ms);

      width: 20px;
      height: 80px;
      background-color: #ff5d60;
      list-style: none;
      border-radius: 5px;
      animation:beat 1.5s ease-in-out var(--time) infinite;

      & + li {
        margin-left: 10px;
      }
    }
  }
}

@keyframes beat {
  0%,
  100%{
     transform: scaleY(1);
  }
  50%{
    transform: scaleY(0.5);
  }
}
`

const code = `
import './App.scss'

export default function App() {
  return (
    <div className="strip-loading" data-title="条形加载器">
      <ul>
          <li style={{ '--index': 0 }} />
          <li style={{ '--index': 1 }} />
          <li style={{ '--index': 2 }} />
          <li style={{ '--index': 3 }} />
          <li style={{ '--index': 4 }} />
          <li style={{ '--index': 5 }} />
      </ul>
    </div>
  )
}`

const Animation1 = () => {
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
export default Animation1
