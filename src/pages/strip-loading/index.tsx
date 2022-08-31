import './index.scss'

const StripLoading = () => {
  return (
    <div className="strip-loading" data-title="条形加载器">
      <ul>
        {
          // @ts-ignore
          <li style={{ '--index': 0 }} />
        }
        {
          // @ts-ignore
          <li style={{ '--index': 1 }} />
        }
        {
          // @ts-ignore
          <li style={{ '--index': 2 }} />
        }
        {
          // @ts-ignore
          <li style={{ '--index': 3 }} />
        }
        {
          // @ts-ignore
          <li style={{ '--index': 4 }} />
        }
        {
          // @ts-ignore
          <li style={{ '--index': 5 }} />
        }
      </ul>
    </div>
  )
}

export default StripLoading
