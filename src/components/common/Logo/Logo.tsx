const Logo = ({ isWhite = false }) => {
   return (
      <>
         <img width="120" src={isWhite ? './logo-white.png' : './logo.png'} alt="Logo" />
      </>
   );
}

export default Logo;