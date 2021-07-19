import { useState, useEffect } from 'react';
import Image from 'next/image'

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
    <Image width={width / 5} height={width / 5 * 1.81818} key={skin.id} alt="" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${chanpionId}_${skin.num}.jpg`}/>
  )
}

export default ChanpionLoadingImg