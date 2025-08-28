import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
 main
import { Button } from './components/Button';

import { Navbar } from './components/Navbar';
 main

export function App() {
  return (
    <Layout>
      <Hero />
 main
      <Button />

      <Navbar />
 main
    </Layout>
  );
}
