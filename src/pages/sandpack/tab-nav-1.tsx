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

.active {
  color: white;
  background-color: #2fc490;
}
.tab-navbar {
  display: flex;
  flex-direction: column-reverse;
  width: 400px;
  height: 600px;
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
      display: flex;
      flex-wrap: nowrap;
      width: 400%;
      height: 100%;
      transition: all 300ms;
      li {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        font-weight: bold;
        color: white;
      }
    }
  }
  input {
    &:nth-child(1):checked {
      & ~ nav label:nth-child(1) {
        @extend .active
      }
      & ~ main ul {
        background-color: #ff5d60;
        transform: translateX(0);
      }
    }
    &:nth-child(2):checked {
      & ~ nav label:nth-child(2) {
        @extend .active
      }
      & ~ main ul {
        background-color: #5b5ff8;
        transform: translateX(-25%);
      }
    }
    &:nth-child(3):checked {
      & ~ nav label:nth-child(3) {
        @extend .active
      }
      & ~ main ul {
        background-color:#ff8e29 ;
        transform: translateX(-50%);
      }
    }
    &:nth-child(4):checked {
      & ~ nav label:nth-child(4) {
        @extend .active
      }
      & ~ main ul {
        background-color: #0190f9;
        transform: translateX(-75%);
      }
    }
  }
}
`

const code = `
import './App.scss'
export default function App() {
  return (
    <div className="tab-navbar">
      <input id="tab1" type="radio" name="nav" hidden defaultChecked />
      <input id="tab2" type="radio" name="nav" hidden />
      <input id="tab3" type="radio" name="nav" hidden />
      <input id="tab4" type="radio" name="nav" hidden />
      <nav>
        <label htmlFor="tab1">tab1</label>
        <label htmlFor="tab2">tab2</label>
        <label htmlFor="tab3">tab3</label>
        <label htmlFor="tab4">tab4</label>
      </nav>
      <main>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
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
