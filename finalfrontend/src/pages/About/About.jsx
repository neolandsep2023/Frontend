import React from 'react'
import"./About.css"
import { H1Form } from '../../components/StyleComponents'
import { BotonArriba } from '../../components/BotonArriba/BotonArriba'

export const About = () => {
  return (<>
    <H1Form>About us</H1Form>
    <section className='about'>
<section>
  <h2>Our Team</h2>
  <div className='figureContainer'>
 <figure className='persona'>
  <img src="https://pic.onlinewebfonts.com/svg/img_181369.png" alt="" />
  <h3>Abel</h3>
 </figure>
 <figure className='persona'>
  <img src="https://pic.onlinewebfonts.com/svg/img_181369.png" alt="" />
  <h3>Lucía</h3>
 </figure>
 <figure className='persona'>
  <img src="https://pic.onlinewebfonts.com/svg/img_181369.png" alt="" />
  <h3>Mario</h3>
 </figure>
 <figure className='persona'>
  <img src="https://pic.onlinewebfonts.com/svg/img_181369.png" alt="" />
  <h3>Natalia</h3>
 </figure>

 
  </div>
 
</section>

      <section className='sectionAbout'>
        <img className='imgAbout' src="https://res.cloudinary.com/djfkchzyq/image/upload/v1702567631/l1bh3epztqs2gackdr4o.png" alt="" />
      <article className='articleAbout'>
        <h2>Our Story</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo vitae velit blandit pretium. Nullam nec purus vitae libero aliquam volutpat. Proin euismod fermentum enim, vel fermentum sem cursus eu.</p>
        </article>
        </section>
        <section className='sectionAboutL'>
        <img className='imgAbout' src="https://res.cloudinary.com/djfkchzyq/image/upload/v1702569293/kr7w3hsdida5r2uk2t3z.avif" alt="" />
      <article className='articleAbout'>
        <h2>Our Mission</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo vitae velit blandit pretium. Nullam nec purus vitae libero aliquam volutpat. Proin euismod fermentum enim, vel fermentum sem cursus eu.</p>
        </article>
        </section>
       
         <article>
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to <a href="#">contact us</a>.</p>
        <p>Neolandprogramacion@gmail.com</p>
        </article>
        <BotonArriba/>
    </section>
   
    </>
  )
}
