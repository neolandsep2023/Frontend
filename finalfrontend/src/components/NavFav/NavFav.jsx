
export const NavFav = ({ setFav }) => {
  return (
    <nav >
     
      <button onClick={() => {setFav("savedRooms")
   }}>Rooms</button>



      <button  onClick={() => {
        setFav("savedPosts") 
       }}>Posts</button>





    </nav>
  );
};
