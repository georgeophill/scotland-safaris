import Card from '../UI/Card'

const Guide = ({ image, name, job, socials}) => {
  return (
    <Card className='guide'>
        <div className='trainer__img'>
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className='trainer__socials'>
            {
                socials.map(({ link, icon }, index) => {
                    return (
                        <a href={link} key={index} target="__blank" rel='noreffer noopener' >
                            {icon}
                        </a>
                    )
                })
            }
        </div>
    </Card>
  )
}

export default Guide