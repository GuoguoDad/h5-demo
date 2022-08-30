import './tab-nav-static.scss'

const TabNavStatic = () => {
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
}

export default TabNavStatic
