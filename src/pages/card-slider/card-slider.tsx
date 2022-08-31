import React from 'react'

export interface CardProps {
  opacity: number
  scale: number
  loop?: boolean
  width: number
  disablePrev?: boolean
  disableNext?: boolean
  boxWidth: number
  index?: number
  list: any[]
  renderItem(data: any): React.ReactNode
  onChange?: (index: number, data: any) => void
  style?: React.CSSProperties
}
interface CardState {
  activeIndex: number
  moving: boolean
}

export default class CardSlider extends React.Component<CardProps, CardState> {
  static defaultProps: Partial<CardProps> = {
    opacity: 0.9,
    scale: 0.9,
    loop: false,
    disablePrev: false,
    disableNext: false
  }

  constructor(props: CardProps) {
    super(props)
    this.state = {
      activeIndex: props.index || 0,
      moving: false
    }
  }

  componentWillReceiveProps(nextProps: any) {
    if (this.props.index !== nextProps.index) {
      this.setState({
        activeIndex: nextProps.index
      })
    }
  }

  // 卡片总数量
  get totalCount() {
    return this.props.list.length
  }

  // 间隔宽度
  get gridWidth() {
    const isEven = this.totalCount % 2 === 0
    const { width, boxWidth } = this.props
    return (boxWidth - width) / (isEven ? this.totalCount : this.totalCount - 1)
  }

  // 禁用prev
  get disablePrev() {
    const { loop, disablePrev } = this.props
    const { activeIndex } = this.state
    if (disablePrev) return true
    return !loop && activeIndex === 0
  }

  // 禁用prev
  get disableNext() {
    const { loop, disableNext } = this.props
    const { activeIndex } = this.state
    if (disableNext) return true
    return !loop && activeIndex === this.totalCount - 1
  }

  /**
   * offset: 是左或者右的第几个
   * direction: 1:右侧：-1：左侧
   */
  getDirection(index: number) {
    const { activeIndex } = this.state
    let direction = 1
    if (
      index - activeIndex > this.totalCount / 2 ||
      (index - activeIndex < 0 && index - activeIndex > -this.totalCount / 2)
    ) {
      direction = -1
    }

    let offset = Math.abs(index - activeIndex)
    if (offset > this.totalCount / 2) {
      offset = activeIndex + this.totalCount - index
    }
    if (index - activeIndex < -this.totalCount / 2) {
      offset = this.totalCount + index - activeIndex
    }
    return {
      direction,
      offset
    }
  }

  render() {
    const { list, renderItem, opacity, scale, width, boxWidth, style = {} } = this.props
    return (
      <div style={{ ...styles.wrapper, ...style }}>
        <div style={{ ...styles.content, width: boxWidth }}>
          {list.map((data, index) => {
            const { direction, offset } = this.getDirection(index)
            const realScale = Math.pow(scale, offset)
            return renderItem({
              key: index,
              ...data,
              style: {
                position: 'absolute',
                left: '50%',
                marginLeft: this.gridWidth * direction * offset + direction * ((width / 2) * (1 - realScale)),
                zIndex: this.totalCount - offset,
                opacity: Math.pow(opacity, offset),
                transform: `translateX(-50%) translateZ(0) scale(${realScale})`,
                transition: 'all 300ms'
              }
            })
          })}
        </div>
        {!this.disablePrev && (
          <a href="javascript:;" style={{ ...styles.btn, left: 35 }} onClick={this.handlePrev}>
            {'<'}
          </a>
        )}
        {!this.disableNext && (
          <a href="javascript:;" style={{ ...styles.btn, right: 35 }} onClick={this.handleNext}>
            {'>'}
          </a>
        )}
      </div>
    )
  }

  handlePrev = () => {
    let { activeIndex } = this.state
    if (this.disablePrev) return
    activeIndex = --activeIndex < 0 ? this.totalCount - 1 : activeIndex
    this.setState({ activeIndex })
    this.handleChange(activeIndex)
  }

  handleNext = () => {
    let { activeIndex } = this.state
    if (this.disableNext) return
    activeIndex = ++activeIndex >= this.totalCount ? 0 : activeIndex
    this.setState({ activeIndex })
    this.handleChange(activeIndex)
  }

  handleChange = (index: number) => {
    const { list, onChange } = this.props
    onChange && onChange(index, list[index])
  }
}

const styles: { [name: string]: React.CSSProperties } = {
  wrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  content: {
    height: 210,
    position: 'relative'
  },
  btn: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 36,
    height: 36,
    zIndex: 99,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24
  }
}
