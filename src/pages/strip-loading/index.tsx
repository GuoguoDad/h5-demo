import './index.scss'
import { CSSProperties } from 'react'

const StripLoading = () => {
  return (
    <div className="strip-loading" data-title="条形加载器">
      <ul>
        <li style={{ '--index': 0 } as CSSProperties} />
        <li style={{ '--index': 1 } as CSSProperties} />
        <li style={{ '--index': 2 } as CSSProperties} />
        <li style={{ '--index': 3 } as CSSProperties} />
        <li style={{ '--index': 4 } as CSSProperties} />
        <li style={{ '--index': 5 } as CSSProperties} />
      </ul>
    </div>
  )
}

export default StripLoading
