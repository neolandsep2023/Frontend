import { useEffect, useState } from 'react';
import { ButtonPrimary, FlexDir, Form, MiniCards } from '../../components/StyleComponents'
<Link to="/register"></Link>
import './Home.css'
import { Link } from 'react-router-dom';
import { BotonArriba } from '../../components/BotonArriba/BotonArriba';

export const Home = () => {
 


  return (

<div className='home'>
  <section className='imagenPrincipal'>
  <article className='registrate'>
 
        <h2>Unlock Benefits:<br/> Register Now!</h2>
        <Link to="/register">
           <ButtonPrimary>Register Now</ButtonPrimary>
        </Link>
       
   
  </article>
  </section>
 
  <section className='articleSmallContainer'>
    <article className='articleSmall'>
      <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1702551961/qelzk4orupgn409surv5.png" alt="Un mapa con una chincheta"/>
      <div className='parteTexto'>
        <h3 className='hHome'>Una de las cosas que hace</h3>
        <p>Explica las cosas que hace la app en esta parte</p>
        <Link className="link"to={"/"}>No logado lleva a Login</Link>
      </div>
    
    </article>
    <article className='articleSmall'>
      <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1702551960/bvy675olyeco90oxqshy.png" alt="Manos en un ordenador"/>
      <div className='parteTexto'>
        <h3 className='hHome'>Otra de las cosas que hace</h3>
        <p>Explica las cosas que hace la app en esta parte</p>
        <Link className="link" to={"/"}>No logado lleva a Login</Link>
      </div>
    
    </article>
    
   
  </section>
  <section className='sectionGrande'>
      <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1702552600/pl9dhup17rw7tibsisyw.png" alt="Dos mujeres riéndose"/>
  
      <article className='textoGrande'>
        <h3 className='hHome'>Una de las cosas grandes</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nam reiciendis, quaerat temporibus 
        neque quidem! </p>
        <Link className="link" to={"/"}>No logado lleva a Login</Link>
      </article>

    </section>
  <section className='leftSection'>
      <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1702557520/qfwylmwwiw6g76ykjmk8.jpg"alt="Grupo de amigos con el móvil"/>
  
      <article className='textoGrandeL'>
        <h3 className='hHome'>Otra de las cosas grandes</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nam reiciendis, quaerat temporibus 
        neque quidem! </p>
        <Link className="link"to={"/"}>No logado lleva a Login</Link>
      </article>

    </section>
    <section className='sectionGrande'>
      <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1702561445/f8yg29casftvtzs7f6bs.png" alt="Un piso lujoso"/>
  
      <article className='textoGrande'>
        <h3 className='hHome'>Una de las cosas grandes</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nam reiciendis, quaerat temporibus 
        neque quidem! </p>
        <Link className="link" to={"/"}>No logado lleva a Login</Link>
      </article>

    </section>
   <BotonArriba/>
</div>
  )
}
