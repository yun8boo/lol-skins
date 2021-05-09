import { GetStaticPaths, GetStaticProps } from "next"
import styled from "styled-components";
import ChanpionLoadingImg from "../../src/components/ChanpionLoadingImg";
import Layaout from "../../src/components/Layout";

interface ChanpionPropsType {
  chanpion: any
}

const Chanpion = ({chanpion}: ChanpionPropsType) => {
  return (
    <Layaout>
      <Container>
        <p>{chanpion.name}</p>
        <Ul>
          {chanpion.skins.map((skin: any) => {
            return (
              <li key={skin.id}>
                <ChanpionLoadingImg chanpionId={chanpion.id} skin={skin} />
              </li>
            )
          })}
        </Ul>
      </Container>
    </Layaout>
  )
}

export default Chanpion


export const getStaticPaths: GetStaticPaths = async () => {
  const url = 'http://ddragon.leagueoflegends.com/cdn/11.9.1/data/ja_JP/champion.json'
  const res = await fetch(url)
  const resJson = await res.json()
  const paths = Object.keys(resJson.data).map(key => {
    return {
      params: {id: key}
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  try {
    const id = params?.id
    if(!id) return { props: {error: 'not found'} };
    const url = `http://ddragon.leagueoflegends.com/cdn/11.9.1/data/ja_JP/champion/${id}.json`
    const res = await fetch(url);
    const resJson = await res.json()
    return {
      props: {
        chanpion: resJson.data[id as string]
      }
    }
  } catch (error) {
    return { props: { errors: "unexpected error" } };
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`