import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import FigmaPortfolio from './FigmaPortfolio';
import {aiLab} from './aiProof.mjs';

describe('portfolio main journeys', () => {
  afterEach(() => window.history.replaceState({}, '', '/'));

  test('homepage shows current work and keeps contact easy to find', () => {
    window.history.replaceState({}, '', '/');
    render(<FigmaPortfolio />);
    expect(screen.getByRole('heading', {name:'Matthew Enyina'})).toBeInTheDocument();
    expect(screen.getByRole('link', {name:/See my AI project/i})).toHaveAttribute('href','#ai-lab');
    expect(screen.getByRole('heading', {name:aiLab.title})).toBeInTheDocument();
    expect(screen.getByRole('navigation', {name:/Primary navigation/i})).toHaveTextContent('AI Lab');
    expect(screen.getByRole('link', {name:/View résumé/i})).toHaveAttribute('href','/resume');
    expect(document.querySelector('form[action^="https://formspree.io/"]')).not.toBeNull();
  });

  test('AI case study describes what exists and what is still being tested', () => {
    window.history.replaceState({}, '', '/work/evidence-driven-ai-workflows');
    render(<FigmaPortfolio />);
    expect(screen.getByRole('heading', {level:1, name:/My personal AI engineering toolkit/i})).toBeInTheDocument();
    expect(screen.getByRole('heading', {name:/A closer look/i})).toBeInTheDocument();
    expect(screen.getByText(/323 checks passed locally/i)).toBeInTheDocument();
    expect(screen.getByText(/examples are fictional/i)).toBeInTheDocument();
    expect(screen.getByRole('link', {name:/Try the walkthrough/i})).toHaveAttribute('href','/#ai-lab');
  });

  test('Moatt project links to its public preview and source', () => {
    window.history.replaceState({}, '', '/work/moatt-studio');
    render(<FigmaPortfolio />);
    expect(screen.getByRole('heading', {level:1, name:/Moatt/i})).toBeInTheDocument();
    expect(screen.getByRole('link', {name:/Open Moatt preview/i})).toHaveAttribute('href','https://enyina.github.io/moatt/');
    expect(screen.getByRole('link', {name:/View public repository/i})).toHaveAttribute('href','https://github.com/Enyina/moatt');
    expect(screen.getByText(/latest live preview has not been rechecked/i)).toBeInTheDocument();
  });
});
