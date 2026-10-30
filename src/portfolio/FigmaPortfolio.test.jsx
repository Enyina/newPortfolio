import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import FigmaPortfolio from './FigmaPortfolio';

describe('proof-led portfolio navigation', () => {
  afterEach(() => window.history.replaceState({}, '', '/'));

  test('the homepage opens with AI evidence and preserves ways to contact me', () => {
    window.history.replaceState({}, '', '/');
    render(<FigmaPortfolio />);
    expect(screen.getByRole('heading', {name:'Matthew Enyina'})).toBeInTheDocument();
    expect(screen.getByRole('link', {name:/Explore my AI engineering lab/i})).toHaveAttribute('href','#ai-lab');
    expect(screen.getByRole('heading', {name:/An engineering system that questions its own answers/i})).toBeInTheDocument();
    expect(screen.getByRole('navigation', {name:/Primary navigation/i})).toHaveTextContent('AI Lab');
    expect(screen.getByRole('link', {name:/View résumé/i})).toHaveAttribute('href','/resume');
    expect(document.querySelector('form[action^="https://formspree.io/"]')).not.toBeNull();
  });

  test('the private AI case study has real evidence and a visible limitation', () => {
    window.history.replaceState({}, '', '/work/evidence-driven-ai-workflows');
    render(<FigmaPortfolio />);
    expect(screen.getByRole('heading', {level:1, name:/I built an AI engineering system that questions its own answers/i})).toBeInTheDocument();
    expect(screen.getByRole('heading', {name:/What the evidence actually shows/i})).toBeInTheDocument();
    expect(screen.getByText(/323 local tests reported passing/i)).toBeInTheDocument();
    expect(screen.getByText(/private source and raw traces are intentionally not public/i)).toBeInTheDocument();
    expect(screen.getByRole('link', {name:/interactive method/i})).toHaveAttribute('href','/#ai-lab');
  });
});
