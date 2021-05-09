import styled from 'styled-components';

interface ChanpionListItem {
  chanpionInfo: any
}

const ChanpionListItem = ({chanpionInfo}: ChanpionListItem) => {
  const imagePath = `http://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/${chanpionInfo.image.full}`;
  return (
    <Container>
      <img src={imagePath} alt=""/>
      <p>{chanpionInfo.name}</p>
    </Container>
  )
}

export default ChanpionListItem

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  width: 110px;
`