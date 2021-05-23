import { GetStaticPaths, GetStaticProps } from "next"
import styled from "styled-components";
import ChanpionLoadingImg from "../../src/components/ChanpionLoadingImg";
import ChanpionSplashImg from "../../src/components/ChanpionSplashImg";
import Layaout from "../../src/components/Layout";
import Seo from "../../src/components/Seo";

interface ChanpionPropsType {
  chanpion: any
}

const Chanpion = ({chanpion}: ChanpionPropsType) => {
  return (
    <Layaout>
      <Seo
        pageTitle={chanpion.name}
        pageImg={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${chanpion.id}_${chanpion.skins[0].num}.jpg`}
      />
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
        <Ul>
          {chanpion.skins.map((skin: any) => {
            return (
              <li key={skin.id}>
                <ChanpionSplashImg chanpionId={chanpion.id} skin={skin} />
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
  width: 100%100px;
`

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`