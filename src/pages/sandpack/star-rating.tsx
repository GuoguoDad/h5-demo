import { Sandpack } from '@codesandbox/sandpack-react'
import './index.scss'

const scssCode = `

.star-rating-container {
  width: 250px;
  display: flex;
  flex-direction: row-reverse;
  margin: 10% auto auto;

  & input {
    width: 30px;
    height: 30px;
    appearance: none;
    cursor: pointer;
    font-size: 30px;
    line-height: 30px;
    transition: all 300ms;

    &+input {
      margin-right: 4px;
    }

    &::after {
      color: #80807F;
      content: '☆';
      transition: all 300ms;
    }

    &:checked{
      &::after,& ~ ::after {
        color: #E64D2E;
        content: '★';
      }
    }
  }
}
`

const code = `
import './App.scss'

export default function App() {
  return (
     <div className="star-rating-container">
      <input type="radio" name="group" />
      <input type="radio" name="group" />
      <input type="radio" name="group" />
      <input type="radio" name="group" />
      <input type="radio" name="group" />
    </div>
  )
}`

const StarRating = () => {
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
export default StarRating
