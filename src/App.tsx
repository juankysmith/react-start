import * as React from 'react';
import Header from './components/Header';
import Center from './components/Center';
import Footer from './components/Footer';
import TopNavBar from './components/TopNavBar';

export const App: React.StatelessComponent<{}> = () => {
  return (
    <div className="container-fluid">
      <Header />
      <TopNavBar />
      <Center name="Prueba" enthusiasmLevel={3}/>
      <Footer />
    </div>
  );
};