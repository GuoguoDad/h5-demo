import TabNavStatic from '@pages/tab-navbar/tab-nav-static'
import TabNavDynamic from '@pages/tab-navbar/tab-nav-dynamic'

const TabNavbar = () => {
  return (
    <div className="container">
      <TabNavStatic />
      <TabNavDynamic />
    </div>
  )
}
export default TabNavbar
