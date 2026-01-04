import { useState } from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Schedule } from './components/Schedule';
import { ShoppingList } from './components/ShoppingList';
import { MealPrep } from './components/MealPrep';
import { Marinades } from './components/Marinades';
import { MealIdeas } from './components/MealIdeas';
import { WeeklyMenu } from './components/WeeklyMenu';
import { Tips } from './components/Tips';
import { ProteinRef } from './components/ProteinRef';
import { Resources } from './components/Resources';
import { Footer } from './components/Footer';
import { ShareModal } from './components/ui/ShareModal';
import './App.css';

function App() {
  const [isDark, toggleDark] = useDarkMode();
  const [shareModalData, setShareModalData] = useState(null);

  const handleShare = (data) => {
    setShareModalData(data);
  };

  const closeShareModal = () => {
    setShareModalData(null);
  };

  return (
    <>
      <Nav isDark={isDark} toggleDark={toggleDark} />
      <main>
        <Hero />
        <Schedule />
        <ShoppingList />
        <MealPrep />
        <Marinades />
        <MealIdeas onShare={handleShare} />
        <WeeklyMenu onShare={handleShare} />
        <Tips />
        <ProteinRef />
        <Resources />
      </main>
      <Footer />
      <ShareModal
        isOpen={shareModalData !== null}
        onClose={closeShareModal}
        shareData={shareModalData}
      />
    </>
  );
}

export default App;
