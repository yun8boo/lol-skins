import { GetStaticProps } from 'next'
import Link from 'next/link'
import ChanpionListItem from '../components/ChanpionListItem';

interface IndexProps {
  chanpionData: {
    type: string,
    format: string
    version: string
    data: any
  }
}

const IndexPage = ({ chanpionData }: IndexProps) => {
  console.log(chanpionData);
  return (
    <div>
      <ul>
        {
          Object.keys(chanpionData.data).map(key => {
            return <li key={key}><ChanpionListItem chanpionInfo={chanpionData.data[key]} /></li>
          })
        }
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const url = 'http://ddragon.leagueoflegends.com/cdn/11.9.1/data/ja_JP/champion.json'
  const res = await fetch(url)
  const resJson = await res.json()
  return {
    props:  {
      chanpionData: resJson
    }
  }
}

export default IndexPage
