import '@testing-library/jest-dom';
import {render, screen, fireEvent, within} from '@testing-library/react';
import AIEvidenceLab from './AIEvidenceLab';
import {aiLab, labScenarios} from './aiProof.mjs';

describe('interactive AI engineering proof exhibit', () => {
  test('introduces the work without suggesting a live agent or exposing private code', () => {
    render(<AIEvidenceLab />);
    expect(screen.getByRole('heading', {name: aiLab.title})).toBeInTheDocument();
    expect(screen.getByText(/Example walkthrough/i)).toBeInTheDocument();
    expect(screen.getByText(/My code and original test sessions stay private/i)).toBeInTheDocument();
    expect(screen.getByRole('link', {name:/See how I built it/i}))
      .toHaveAttribute('href', '/work/evidence-driven-ai-workflows');
  });

  test('changes the displayed scenario and pressed state on activation', () => {
    render(<AIEvidenceLab />);
    const buttons = screen.getByRole('group', {name:/Choose an engineering scenario/i});
    expect(within(buttons).getByRole('button', {name:/Track down a bug/i}))
      .toHaveAttribute('aria-pressed', 'true');
    fireEvent.click(within(buttons).getByRole('button', {name:/Look past the score/i}));
    expect(within(buttons).getByRole('button', {name:/Look past the score/i}))
      .toHaveAttribute('aria-pressed', 'true');
    expect(within(buttons).getByRole('button', {name:/Track down a bug/i}))
      .toHaveAttribute('aria-pressed', 'false');
    expect(screen.getByText(/A higher score is not enough/i)).toBeInTheDocument();
    expect(screen.getByText(/One answer lost useful context/i)).toBeInTheDocument();
  });

  test('includes a safety and recovery view without claiming live activation', () => {
    render(<AIEvidenceLab />);
    fireEvent.click(screen.getByRole('button', {name:/Ignore bad instructions/i}));
    expect(screen.getByText(/The document does not get to decide/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', {name:/Know how to undo it/i}));
    expect(screen.getByText(/Go back to the last good version/i)).toBeInTheDocument();
    expect(screen.getByText(/still testing—not a completed rollback demonstration/i)).toBeInTheDocument();
  });

  test('all scenario identifiers are unique and every scenario has four explained steps', () => {
    const names = labScenarios.map(item => item.id);
    expect(new Set(names).size).toBe(names.length);
    expect(labScenarios).toHaveLength(4);
    for (const item of labScenarios) {
      expect(item.stages).toHaveLength(4);
      expect(item.stages.every(step => step.name && step.detail)).toBe(true);
    }
  });
});
