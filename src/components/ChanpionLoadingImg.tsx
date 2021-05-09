interface ChanpionLoadingImgProps {
  chanpionId: string
  skin: any
}

const ChanpionLoadingImg = ({chanpionId, skin}: ChanpionLoadingImgProps) => {
  return (
    <img height={500} key={skin.id} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${chanpionId}_${skin.num}.jpg`}/>
  )
}

export default ChanpionLoadingImg