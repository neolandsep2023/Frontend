  import { Link, NavLink, useNavigate } from "react-router-dom";
  import { useThemeApp } from "../../context/themeContext";
  import { useAuth } from "../../context/authContext";
  import { useEffect } from "react";
import Switch from '@mui/material/Switch';
import"./Header.css"
import { HeaderSmall } from './HeaderSmall';

export const Header = () => {
  const isMobile = window.innerWidth < 776 ? true : false 
  const { toggleTheme, theme } = useThemeApp();
  const navigate = useNavigate()
  const { user, logout } = useAuth();
  const navigateToLogin = () => {
    navigate("/login");
  };




  useEffect(() => {
    const handleResize = () => {
      window.location.reload()
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (<>
  {!isMobile ?<header className='headerDesktop'>
    <Link to={"/"} className="headerImg">
    <img src="https://res.cloudinary.com/daxddugwt/image/upload/v1702550399/Untitled_Artwork_33_nmkluc.png" alt="Logo de la clínica"/>
    </Link>
    <div className="navs">

    <div className="botonesH">
        <button className="buttonHeader" onClick={toggleTheme}>
          {theme == "dark" ? "☀️" : "🌙"}
        </button>
        <button className="buttonHeader" onClick={user == null ? navigateToLogin : logout}>
          {user == null ? "LOG IN" : "LOG OUT"}
        </button>
        {user != null && (<Link to={"/profile"}>
         <img style={{ width: 50, borderRadius: "50%" }} src={user.image} alt="User" />
        </Link>)
        
       }
        </div>
        <nav className="navDos">
           
            <ul className='mainNav'>
            
          
              <NavLink to={"/feed"} >
                Feed
              </NavLink>
         

           
           
              <NavLink to={"/roomSearch"} >
                Room Search
              </NavLink>
          

        
              <NavLink to={"/createRoom"} >
                Create Room
              </NavLink>
        
              <NavLink to={"/createPost"} >
                Create Post
              </NavLink>
       

              <NavLink to={"/messages"}>
                Messages
              </NavLink>
       
          
              
           
            </ul>
          
        </nav>
        </div>
    </header>:<HeaderSmall/>
  }
    
    </>
  )
}

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // export const Header = () => {
  //   const { toggleTheme, theme } = useThemeApp();
  //   const { user, logout } = useAuth();
  //   const navigate = useNavigate();
  //   const isDesktop = window.innerWidth < 4000 ? true : false
  //   const isTablet = window.innerWidth < 768 ? true : false
  //   const isMobile = window.innerWidth < 576 ? true : false 

  //   // console.log(user);
  //   const navigateToLogin = () => {
  //     navigate("/login");
  //   };
  //   const navigateToProfile = () => {
  //     (isDesktop || isTablet) && navigate("/profile");
  //     isMobile && navigate("/profile")
  //   }

  //   return (
  //     <div>
  //       <HeaderStyle>
  //         <FlexDir>
  //           <Link to="/">
  //           <img
  //             alt="logo"
  //             src="https://res.cloudinary.com/daxddugwt/image/upload/v1702550399/Untitled_Artwork_33_nmkluc.png"
  //           />
  //           </Link>
  //           <ButtonHeader
              
  //             onClick={toggleTheme}
  //           >{theme == "dark" ? "☀️" : "🌙"}
              
  //           </ButtonHeader>

  //             <ButtonHeader
                
  //               onClick={user == null ? navigateToLogin : logout}
  //             >
  //               {user == null ? "LOG IN" : "LOG OUT"}
  //             </ButtonHeader>

  //             <>
  //               {user !== null && (
  //                 <ButtonHeader
                   
  //                   onClick={navigateToProfile}
  //                 >
  //                   PROFILE
  //                 </ButtonHeader>
  //               )}
  //             </>
  //             {/* //no puede haber un navLink y un boton que te redirija. Si hay un navLink y le pones al navLink el redirect en onCLick
  //             //y tienes un boton, no pilla el redirect.  Si pones el onCLick en el styledComponent tampoco te lo pilla
  //             // solo te lo coge si quitas el navLink y metes el onClick en el boton. Es importante meterle el navigate
  //             //instanciado de useNavigate de react, porque solo con el componente <Navigate/> no funciona */}
  //         </FlexDir>
  //       </HeaderStyle>
  //     </div>
  //   );
  // };
