import Image from 'next/image';
import styled from 'styled-components';
import Blur from '../../public/blur.jpeg'

interface ChanpionListItem {
  chanpionInfo: any
}

const ChanpionListItem = ({chanpionInfo}: ChanpionListItem) => {
  console.log(chanpionInfo);
  
  const imagePath = `http://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/${chanpionInfo.image.full}`;
  return (
    <Container>
      <Image 
        src={imagePath}
        width={100}
        height={100}
        alt={chanpionInfo.name}
      />
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
  width: 100px;
`