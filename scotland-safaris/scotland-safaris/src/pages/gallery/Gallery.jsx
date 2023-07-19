import Header from '../../components/Header'
import HeaderImage from '../../images/stag-and-strath.JPG'
import './Gallery.css'

const Gallery = () => {

  const galleryLength = 11;
  const images = []

  for( let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery/gallery${i}.JPG`))
  }

  return (
    
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Beatae non repudiandae ducimus repellendus cupiditate unde. Temporibus eius fugit quis nihil.
      </Header>
      <section className='gallery'>
        <div className='container gallery__container'>
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery Image ${index+1}`} />
              </article>
            })
          }
          
        </div>
      </section>
    </>
  )
}

export default Gallery