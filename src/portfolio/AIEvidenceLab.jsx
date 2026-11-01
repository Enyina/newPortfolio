import {useState} from 'react';
import {aiLab, labScenarios} from './aiProof.mjs';
import './ai-lab.css';

export default function AIEvidenceLab() {
  const [selected, setSelected] = useState(labScenarios[0].id);
  const scenario = labScenarios.find(item => item.id === selected) || labScenarios[0];
  return <section className="ai-lab fm-section" id="ai-lab" aria-labelledby="ai-lab-heading">
    <div className="fm-container">
      <div className="ai-lab-intro">
        <div>
          <span className="fm-kicker"><b>✳</b> {aiLab.eyebrow}</span>
          <h2 id="ai-lab-heading">{aiLab.title}</h2>
          <p>{aiLab.intro}</p>
          <div className="ai-lab-intro-actions">
            <a className="fm-button fm-button-primary" href="/work/evidence-driven-ai-workflows">See how I built it ↗</a>
            <span>A look inside the project.</span>
          </div>
        </div>
        <div className="ai-lab-identity" aria-label="A four-stage, review-gated engineering process">
          <span className="ai-lab-identity-top">PERSONAL ENGINEERING TOOLS <span>v.2026</span></span>
          <div className="ai-lab-orbit" aria-hidden="true"><span>?</span><i/><i/><i/></div>
          <strong>RESEARCH <span>→</span> TEST <span>→</span> LEARN</strong>
          <small>Built for the problems I keep running into.</small>
        </div>
      </div>

      <div className="ai-lab-signals" aria-label="A few numbers from the project">
        {aiLab.signals.map(signal => <div className="ai-lab-signal" key={signal.label}>
          <strong>{signal.value}</strong>
          <span>{signal.label}</span>
          <p>{signal.note}</p>
        </div>)}
      </div>

      <div className="ai-lab-measure" aria-label="A closer look at a Codex experiment">
        <div className="ai-lab-measure-description">
          <span className="fm-kicker"><b>A REAL CODEX TEST</b></span>
          <h3>The test score wasn't the whole story.</h3>
          <p>I ran the same 15 writing tasks with and without a new skill. It scored better on phrase matching, but a closer read showed one response had lost useful context. I'm still testing it.</p>
          <span className="ai-lab-measure-status">Writing skill still under review</span>
        </div>
        <div className="ai-lab-bars" aria-label="Results from one 15-task writing experiment">
          <div className="ai-lab-bar-row"><div><strong>Before</strong><span>9 / 15</span></div><div className="ai-lab-bar-track"><span style={{width:'60%'}}/></div></div>
          <div className="ai-lab-bar-row ai-lab-bar-row-candidate"><div><strong>With my new skill</strong><span>11 / 15</span></div><div className="ai-lab-bar-track"><span style={{width:'73.333%'}}/></div></div>
          <p>Phrase checks from October 2026, not a measure of overall quality.</p>
        </div>
      </div>
      <div className="ai-lab-workbench">
        <div className="ai-lab-workbench-head">
          <div>
            <span className="fm-kicker"><b>HOW IT WORKS</b> / FOUR EXAMPLES</span>
            <h3>Four situations I built around</h3>
          </div>
          <span className="ai-lab-demo-indicator"><span/> Example walkthrough</span>
        </div>
        <div className="ai-lab-demo-layout">
          <div className="ai-lab-demo-menu" role="group" aria-label="Choose an engineering scenario">
            {labScenarios.map((item, index) => <button
              type="button"
              key={item.id}
              className={item.id === scenario.id ? 'ai-lab-option is-active' : 'ai-lab-option'}
              aria-pressed={item.id === scenario.id}
              onClick={() => setSelected(item.id)}>
                <span>{String(index+1).padStart(2,'0')}</span>
                <strong>{item.label}</strong>
                <span aria-hidden="true">↗</span>
              </button>)}
            <p>Choose a situation to see the steps.</p>
          </div>
          <div className="ai-lab-demo-screen" aria-live="polite" aria-atomic="true">
            <div className="ai-lab-screen-top"><span><i/> {scenario.eyebrow}</span><span>EXAMPLE</span></div>
            <p className="ai-lab-question">“{scenario.question}”</p>
            <div className="ai-lab-flow" aria-label="Decision sequence">
              {scenario.stages.map((step, index) => <div className="ai-lab-flow-step" key={step.name}>
                <div className="ai-lab-flow-rail"><span>{String(index+1).padStart(2,'0')}</span>{index < scenario.stages.length-1 && <i/>}</div>
                <div><strong>{step.name}</strong><p>{step.detail}</p></div>
              </div>)}
            </div>
            <div className="ai-lab-verdict">
              <div><span>WHAT I'D DO</span><strong>{scenario.verdict}</strong></div>
              <p>{scenario.outcome}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ai-lab-bottom">
        <p>{aiLab.disclaimer}</p>
        <a href="/work/evidence-driven-ai-workflows">Read the project story ↗</a>
      </div>
    </div>
  </section>;
}
