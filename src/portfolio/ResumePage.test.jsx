import '@testing-library/jest-dom';
import {render, screen, within, fireEvent} from '@testing-library/react';
import ResumePage from './ResumePage';

describe('résumé as a professional story, not a presentation gimmick', () => {
  test('opens with concrete work and offers clear chapter links', () => {
    render(<ResumePage />);
    expect(screen.getByRole('heading', {level:1, name:'Matthew Enyina'})).toBeInTheDocument();
    expect(screen.getByText(/I build products from the interface down to the API/i)).toBeInTheDocument();
    const nav=screen.getByRole('navigation',{name:/Explore this résumé/i});
    expect(within(nav).getByRole('link',{name:/Work experience/i}))
      .toHaveAttribute('href','#resume-experience');
    expect(within(nav).getByRole('link',{name:/Selected projects/i}))
      .toHaveAttribute('href','#resume-projects');
    expect(within(nav).getByRole('link',{name:/Tools I use/i}))
      .toHaveAttribute('href','#resume-toolkit');
  });

  test('work history leads naturally to a real, public-safe case study', () => {
    render(<ResumePage />);
    expect(screen.getByRole('heading',{name:/Where I've worked/i})).toBeInTheDocument();
    expect(screen.getByRole('heading',{name:/Senior Full-Stack Product Engineer · Famasi Africa/i}))
      .toBeInTheDocument();
    expect(screen.getByRole('link',{name:/Read about an order-flow problem/i}))
      .toHaveAttribute('href','/work/pharmacy-order-orchestration');
    expect(screen.getByRole('heading',{name:/What I've built beyond the job title/i})).toBeInTheDocument();
    expect(screen.getByRole('link',{name:/My personal AI engineering toolkit/i}))
      .toHaveAttribute('href','/work/evidence-driven-ai-workflows');
  });

  test('keeps printing, direct contact and a clean endpoint', () => {
    const prior=window.print;
    window.print=jest.fn();
    try {
      render(<ResumePage />);
      fireEvent.click(screen.getByRole('button',{name:/Print resume or save as PDF/i}));
      expect(window.print).toHaveBeenCalledTimes(1);
      expect(screen.getByRole('link',{name:/Let's talk/i})).toHaveAttribute('href',expect.stringMatching(/^mailto:/));
    } finally {
      window.print=prior;
    }
  });
});
