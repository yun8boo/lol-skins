import { useState, useEffect } from 'react';
import styled from "styled-components"

interface ChanpionLoadingImgProps {
  chanpionId: string
  skin: any
}

const ChanpionLoadingImg = ({chanpionId, skin}: ChanpionLoadingImgProps) => {
  const [width, setwidth] = useState(0)
  useEffect(() => {
    setwidth(window.innerWidth);
  }, [])
  return (
    <Img width={width / 5} key={skin.id} alt="" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${chanpionId}_${skin.num}.jpg`}/>
  )
}

export default ChanpionLoadingImg

const Img = styled.img``