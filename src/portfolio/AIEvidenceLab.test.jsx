import '@testing-library/jest-dom';
import {render, screen, fireEvent, within} from '@testing-library/react';
import AIEvidenceLab from './AIEvidenceLab';
import {aiLab, labScenarios} from './aiProof.mjs';

describe('personal AI project walkthrough', () => {
  test('is clear about the example and links to the full story', () => {
    render(<AIEvidenceLab />);
    expect(screen.getByRole('heading', {name: aiLab.title})).toBeInTheDocument();
    expect(screen.getByText(/examples are fictional/i)).toBeInTheDocument();
    expect(screen.getByText(/Example walkthrough/i)).toBeInTheDocument();
    expect(screen.getByRole('link', {name:/See how I built it/i}))
      .toHaveAttribute('href', '/work/evidence-driven-ai-workflows');
  });

  test('can switch examples with clear pressed state', () => {
    render(<AIEvidenceLab />);
    const group = screen.getByRole('group', {name:/Choose an engineering scenario/i});
    expect(within(group).getByRole('button', {name:/Track down a bug/i}))
      .toHaveAttribute('aria-pressed', 'true');
    fireEvent.click(within(group).getByRole('button', {name:/Look past the score/i}));
    expect(within(group).getByRole('button', {name:/Look past the score/i}))
      .toHaveAttribute('aria-pressed', 'true');
    expect(within(group).getByRole('button', {name:/Track down a bug/i}))
      .toHaveAttribute('aria-pressed', 'false');
    expect(screen.getByText(/I left that skill in testing/i)).toBeInTheDocument();
  });

  test('distinguishes the implemented handoff format from an untested round trip', () => {
    render(<AIEvidenceLab />);
    fireEvent.click(screen.getByRole('button', {name:/Keep projects separate/i}));
    expect(screen.getByText(/Check access before doing anything/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', {name:/Pick up in another tool/i}));
    expect(screen.getByText(/Continue from a checked handoff/i)).toBeInTheDocument();
    expect(screen.getByText(/complete two-tool round trip still needs testing/i)).toBeInTheDocument();
  });

  test('four scenarios have unique identifiers and useful steps', () => {
    expect(labScenarios).toHaveLength(4);
    expect(new Set(labScenarios.map(s=>s.id)).size).toBe(4);
    for (const scenario of labScenarios) {
      expect(scenario.stages).toHaveLength(4);
      expect(scenario.stages.every(s=>Boolean(s.name && s.detail))).toBe(true);
    }
  });
});
