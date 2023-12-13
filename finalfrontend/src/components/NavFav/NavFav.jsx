
export const NavFav = ({ setFav }) => {
  return (
    <nav >
     
      <button onClick={() => {setFav("savedRooms")
   }}>Rooms</button>



      <button  onClick={() => {
        setFav("Posts") 
       }}>Posts</button>





    </nav>
  );
};
