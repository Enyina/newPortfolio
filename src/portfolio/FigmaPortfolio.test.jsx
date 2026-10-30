import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import FigmaPortfolio from './FigmaPortfolio';

describe('proof-led portfolio navigation', () => {
  afterEach(() => window.history.replaceState({}, '', '/'));

  test('the homepage opens with AI evidence and preserves ways to contact me', () => {
    window.history.replaceState({}, '', '/');
    render(<FigmaPortfolio />);
    expect(screen.getByRole('heading', {name:'Matthew Enyina'})).toBeInTheDocument();
    expect(screen.getByRole('link', {name:/See my AI project/i})).toHaveAttribute('href','#ai-lab');
    expect(screen.getByRole('heading', {name:/AI can write code\. I built something that questions it/i})).toBeInTheDocument();
    expect(screen.getByRole('navigation', {name:/Primary navigation/i})).toHaveTextContent('AI Lab');
    expect(screen.getByRole('link', {name:/View résumé/i})).toHaveAttribute('href','/resume');
    expect(document.querySelector('form[action^="https://formspree.io/"]')).not.toBeNull();
  });

  test('the private AI case study has real evidence and a visible limitation', () => {
    window.history.replaceState({}, '', '/work/evidence-driven-ai-workflows');
    render(<FigmaPortfolio />);
    expect(screen.getByRole('heading', {level:1, name:/Building an AI engineering system I can trust/i})).toBeInTheDocument();
    expect(screen.getByRole('heading', {name:/A closer look/i})).toBeInTheDocument();
    expect(screen.getByText(/323 checks passed locally/i)).toBeInTheDocument();
    expect(screen.getByText(/My code and original test sessions stay private/i)).toBeInTheDocument();
    expect(screen.getByRole('link', {name:/Try the walkthrough/i})).toHaveAttribute('href','/#ai-lab');
  });
});
