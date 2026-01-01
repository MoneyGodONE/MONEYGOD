import type { Metadata } from 'next';
import LandingPageInteractive from './components/LandingPageInteractive';

export const metadata: Metadata = {
  title: 'MGO Orbital Showcase - Discover Interconnected Crypto Ecosystems',
  description: 'First orbital visualization platform revealing interconnected blockchain projects with unprecedented transparency. Join 156K+ investors exploring the future of crypto ecosystems.',
};

export default function LandingPage() {
  return <LandingPageInteractive />;
}