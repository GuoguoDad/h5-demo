import CardSlider from './card-slider'
import CardItem from './card-item'

const list = [
  {
    name: '1',
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/218369/27/14203/132191/6226a702E5a0b9236/a11294e884bc7635.jpg!cr_1053x420_4_0!q70.jpg'
  },
  {
    name: '2',
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/158791/25/27003/106834/620c4bc2Efb15fc57/7c89841a597ce41b.jpg!cr_1053x420_4_0!q70.jpg'
  },
  {
    name: '3',
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/117358/2/22877/138901/6228342eE68ae2c88/f8a9adb2642c1313.jpg!cr_1053x420_4_0!q70.jpg'
  },
  {
    name: '4',
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/121592/2/24818/138081/622ccc8fEdf840f95/cd229433d699c70c.jpg!cr_1053x420_4_0!q70.jpg'
  },
  {
    name: '5',
    url: 'https://imgcps.jd.com/ling-cubic/danpin/lab/amZzL3QxLzE2Mjc4Mi8zNi85MTM4LzQ0NjQ1MS82MDQwN2Q4MUVkMDlmMWM5OC9jZWVmOWU0OWVkNzlkNjZkLnBuZw/6Zi_6L-q6L6-5pav6LeR5q2l6Z6L/5qmh6IO25aSW5bqV/60586f6fa1b18f3314204f2d/cr_1125x449_0_166/s/q70.jpg'
  },
  {
    name: '6',
    url: 'https://imgcps.jd.com/img-cubic/creative_server_cid/v2/2000755/10041170380456/FocusActivity/CkNqZnMvdDEvMjExMDQ2LzIyLzExMTc3Lzc0NTA0LzYxYTU4MzAwRWU1YjQ0OTcxL2Q5YjE5NzlmOGJkMjAzNzIuanBnEgs4NDIteGNfMF81MjABOPOOekIWChLkuprnkZ_lo6vot5HmraXpnosQAEIQCgzpkpzmg6DnmbvlnLoQAUIQCgznq4vljbPmiqLotK0QAkIKCgbkvJjpgIkQBw/cr_1053x420_4_0/s/q70.jpg'
  },
  {
    name: '7',
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/117358/2/22877/138901/6228342eE68ae2c88/f8a9adb2642c1313.jpg!cr_1053x420_4_0!q70.jpg'
  }
]

const Index = () => {
  return (
    <div>
      <h1
        style={{
          margin: 30,
          textAlign: 'center'
        }}
      >
        REACT-CARD-SLIDER
      </h1>
      <CardSlider
        list={list}
        renderItem={CardItem}
        width={375}
        boxWidth={500}
        opacity={0.75}
        scale={0.9}
        disableNext={false}
        disablePrev={false}
        onChange={(index: number, data: any) => {
          console.log(index, data)
        }}
      />
    </div>
  )
}

export default Index
