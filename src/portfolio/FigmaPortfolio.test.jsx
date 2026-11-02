import '@testing-library/jest-dom';
import {render, screen, within} from '@testing-library/react';
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
  test('the homepage offers three purposeful routes into the work', () => {
    window.history.replaceState({}, '', '/');
    render(<FigmaPortfolio />);
    expect(screen.getByRole('heading', {name:/Three ways into my work/i})).toBeInTheDocument();
    expect(screen.getByRole('link', {name:/What happens when I disagree with an AI suggestion/i}))
      .toHaveAttribute('href', '/work/evidence-driven-ai-workflows');
    expect(screen.getByRole('link', {name:/What do you do when a payment times out/i}))
      .toHaveAttribute('href', '/work/payment-payout-reliability');
    expect(screen.getByRole('link', {name:/Can you try something I built/i}))
      .toHaveAttribute('href', '/work/moatt-studio');
  });

  test('every case study provides chapters and a way to keep exploring', () => {
    window.history.replaceState({}, '', '/work/evidence-driven-ai-workflows');
    render(<FigmaPortfolio />);
    const chapters = screen.getByRole('navigation', {name:/Explore this project's story/i});
    expect(within(chapters).getByRole('link', {name:/The tricky part/i}))
      .toHaveAttribute('href', '#the-hard-part');
    expect(screen.getByText(/One proposed skill scored better on a test/i)).toBeInTheDocument();
    expect(screen.getByRole('navigation', {name:/What to read next/i})).toBeInTheDocument();
    expect(screen.getByRole('link', {name:/Next: Keeping pharmacy orders on track/i}))
      .toHaveAttribute('href','/work/pharmacy-order-orchestration');
    expect(screen.getByRole('link', {name:/Or get in touch/i}))
      .toHaveAttribute('href','/#contact');
  });

  test('an archived project can still reach the résumé without a dead end', () => {
    window.history.replaceState({}, '', '/work/shop-kego');
    render(<FigmaPortfolio />);
    expect(screen.getByRole('navigation', {name:/What to read next/i})).toBeInTheDocument();
    expect(screen.getByRole('link', {name:/View my résumé/i})).toHaveAttribute('href','/resume');
  });

});
