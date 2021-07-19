import Image from 'next/image'

interface ChanpionLoadingImgProps {
  chanpionId: string
  skin: any
}

const ChanpionLoadingImg = ({chanpionId, skin}: ChanpionLoadingImgProps) => {
  return (
    <Image layout="fill" key={skin.id} alt="" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${chanpionId}_${skin.num}.jpg`}/>
  )
}

export default ChanpionLoadingImg