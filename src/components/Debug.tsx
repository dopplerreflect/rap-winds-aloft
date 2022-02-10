const Debug = () => (
  <div className='Debug'>
    <h1>Debug</h1>
    <code>{JSON.stringify(JSON.parse(sessionStorage.getItem('cache') || ''), null, 2)}</code>
  </div>
);

export default Debug;
