// app/page.tsx  

import ScientificCalculator from './ScientificCalculator';  

const Home = () => {  
  return (  
    <main>  
      <h1 style={{ textAlign: 'center', margin: '20px 0', fontWeight: 'bold' }}>Modern Scientific Calculator</h1>  
      <ScientificCalculator />  
    </main>  
  );  
};  

export default Home;