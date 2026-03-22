import { Metadata } from 'next';
import AboutClient from '@/components/AboutClient';

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about CareerDCode's mission to bridge the technical gap and engineer future leaders with elite mentorship from IIT Delhi alumni.",
};

export default function AboutUs() {
  return <AboutClient />;
}
