import {useEffect, useState} from 'react';

/**
 * Optional enhancement to plain in-page links. The story is still fully
 * navigable if script-driven progress cannot be measured.
 */
export default function StoryProgress({chapters}) {
  const [active, setActive] = useState(chapters[0]?.id || '');
  const [progress, setProgress] = useState(0);
  const chapterKey = chapters.map(chapter => chapter.id).join('|');

  useEffect(() => {
    const ids = chapterKey ? chapterKey.split('|') : [];
    if (!ids.length) return;
    let scheduled = false;
    let frame;
    const update = () => {
      scheduled = false;
      const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
      const story = document.querySelector('.fm-detail-story');
      if (!story || !sections.length) return;
      const readingLine = 180;
      let visibleChapter = sections[0].id;
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        // Zero-height sections have no meaningful position (including during
        // initial layout and in headless renderers). Never mark them as read.
        if (rect.height > 0 && rect.top <= readingLine) visibleChapter = section.id;
      }
      setActive(visibleChapter);

      const rect = story.getBoundingClientRect();
      const from = rect.top + window.scrollY - readingLine;
      const until = rect.bottom + window.scrollY - Math.min(window.innerHeight * 0.45, 340);
      const distance = Math.max(until - from, 1);
      const value = Math.max(0, Math.min(100, Math.round((window.scrollY - from) / distance * 100)));
      setProgress(value);
    };
    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      if (typeof window.requestAnimationFrame === 'function') frame = window.requestAnimationFrame(update);
      else update();
    };
    update();
    window.addEventListener('scroll', schedule, {passive:true});
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame != null && typeof window.cancelAnimationFrame === 'function') window.cancelAnimationFrame(frame);
    };
  // A new project has a different list of chapter IDs; no live data is loaded.
  }, [chapterKey]);

  if (!chapters.length) return null;
  return <nav className="fm-detail-steps" aria-label="Explore this project's story">
    <div className="fm-detail-steps-title">
      <span>FOLLOW THE STORY</span>
      <span className="fm-detail-progress-value" aria-live="off">{progress}% read</span>
    </div>
    <div className="fm-detail-track" role="progressbar" aria-label="Reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
      <span style={{width: progress + '%'}}/>
    </div>
    <div className="fm-detail-chapter-links">
      {chapters.map((chapter,i)=><a key={chapter.id} href={'#'+chapter.id}
        aria-current={active===chapter.id?'location':undefined}>
        <span>{String(i+1).padStart(2,'0')}</span>{chapter.title}
      </a>)}
    </div>
  </nav>;
}
