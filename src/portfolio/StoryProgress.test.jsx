import '@testing-library/jest-dom';
import {render, screen, within} from '@testing-library/react';
import StoryProgress from './StoryProgress';

const chapters=[
  {id:'the-problem',title:'The problem'},
  {id:'my-part',title:'What I built'},
  {id:'the-hard-part',title:'The tricky part'},
  {id:'the-result',title:'Where it stands'},
  {id:'what-i-learned',title:'What I learned'},
];

describe('story progress, navigation and safe fallback',()=>{
  test('provides native links to the full story for keyboard and mouse visitors',()=>{
    render(<StoryProgress chapters={chapters}/>);
    const nav=screen.getByRole('navigation',{name:/Explore this project's story/i});
    const links=within(nav).getAllByRole('link');
    expect(links).toHaveLength(5);
    expect(links.map(link=>link.getAttribute('href'))).toEqual(chapters.map(chapter=>'#'+chapter.id));
    expect(within(nav).getByRole('progressbar',{name:/Reading progress/i}))
      .toHaveAttribute('aria-valuenow','0');
  });

  test('does not fabricate navigation for missing content',()=>{
    const {container}=render(<StoryProgress chapters={[]}/>);
    expect(container).toBeEmptyDOMElement();
  });

  test('marks the first chapter when the story has not moved yet',()=>{
    const {container}=render(<div>
      <StoryProgress chapters={chapters}/>
      <div className="fm-detail-story">{chapters.map(chapter=><section key={chapter.id} id={chapter.id}>{chapter.title}</section>)}</div>
    </div>);
    expect(container.querySelector('a[aria-current="location"]'))
      .toHaveAttribute('href','#the-problem');
  });
});
