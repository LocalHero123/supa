function Loader() {

   let style = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      zIndex: '3',
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center',
   }

   return (
      <div style={style}>
         <div>
            <img style={{ width: '70px', display: 'block', margin: '0 auto' }} src="https://i.gifer.com/origin/b3/b3a856ef146732dc3ff6c6ea5ea56ff1_w200.gif" />
            <div style={{ margin: '10px 0 0 8px', color: 'white' }}>Загрузка...</div>
         </div>
      </div>
   )
}

export default Loader