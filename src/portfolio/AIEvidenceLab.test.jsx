import '@testing-library/jest-dom';
import {render, screen, fireEvent, within} from '@testing-library/react';
import AIEvidenceLab from './AIEvidenceLab';
import {aiLab, labScenarios} from './aiProof.mjs';

describe('interactive AI engineering proof exhibit', () => {
  test('introduces the work without suggesting a live agent or exposing private code', () => {
    render(<AIEvidenceLab />);
    expect(screen.getByRole('heading', {name: aiLab.title})).toBeInTheDocument();
    expect(screen.getByText(/No live agent connected/i)).toBeInTheDocument();
    expect(screen.getByText(/private source and raw traces are intentionally not public/i)).toBeInTheDocument();
    expect(screen.getByRole('link', {name:/Explore the full case study/i}))
      .toHaveAttribute('href', '/work/evidence-driven-ai-workflows');
  });

  test('changes the displayed scenario and pressed state on activation', () => {
    render(<AIEvidenceLab />);
    const buttons = screen.getByRole('group', {name:/Choose an engineering scenario/i});
    expect(within(buttons).getByRole('button', {name:/Find the real cause/i}))
      .toHaveAttribute('aria-pressed', 'true');
    fireEvent.click(within(buttons).getByRole('button', {name:/Challenge the score/i}));
    expect(within(buttons).getByRole('button', {name:/Challenge the score/i}))
      .toHaveAttribute('aria-pressed', 'true');
    expect(within(buttons).getByRole('button', {name:/Find the real cause/i}))
      .toHaveAttribute('aria-pressed', 'false');
    expect(screen.getByText(/Improvement not established/i)).toBeInTheDocument();
    expect(screen.getByText(/lost important context in a real answer/i)).toBeInTheDocument();
  });

  test('includes a safety and recovery view without claiming live activation', () => {
    render(<AIEvidenceLab />);
    fireEvent.click(screen.getByRole('button', {name:/Hold the boundary/i}));
    expect(screen.getByText(/Instruction rejected/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', {name:/Design recovery/i}));
    expect(screen.getByText(/Restore the last known good version/i)).toBeInTheDocument();
    expect(screen.getByText(/required—not assumed complete/i)).toBeInTheDocument();
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
