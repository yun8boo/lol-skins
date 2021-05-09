import { GetStaticProps } from 'next'
import styled from 'styled-components';
import Link from 'next/link'
import ChanpionListItem from '../src/components/ChanpionListItem';
import Layaout from '../src/components/Layout';

interface IndexProps {
  chanpionData: {
    type: string,
    format: string
    version: string
    data: any
  }
}

const IndexPage = ({ chanpionData }: IndexProps) => {
  return (
    <Layaout>
      <Container>
        <Ul>
          {
            Object.keys(chanpionData.data).map(key => {
              return (
                <li key={key}>
                  <Link href={`/chanpions/${key}`}>
                    <a><ChanpionListItem chanpionInfo={chanpionData.data[key]} /></a>
                  </Link>
                </li>
              )
            })
          }
        </Ul>
      </Container>
    </Layaout>
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

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`