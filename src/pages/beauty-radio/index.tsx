import './index.scss'

const BeautyRadio = () => {
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
}

export default BeautyRadio
