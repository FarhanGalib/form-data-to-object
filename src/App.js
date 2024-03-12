import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData.entries());
    setUserData(formDataObject);
    console.log(formDataObject);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          position: 'absolute',
          border: '1px solid black',
          display: 'flex',
          flexDirection: 'column',
          width: '40%',
          gap: '.5rem',
          padding: '1rem',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <input name='email' type='text' placeholder='email' />
        <input name='name' type='text' placeholder='name' />
        <input type='submit' />
      </form>
      <div>
        <div>{userData?.email}</div>
        <div>{userData?.name}</div>
      </div>
    </div>
  );
}

export default App;
