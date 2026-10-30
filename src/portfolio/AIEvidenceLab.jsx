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
            <a className="fm-button fm-button-primary" href="/work/evidence-driven-ai-workflows">Explore the full case study ↗</a>
            <span>Private source. Public reasoning.</span>
          </div>
        </div>
        <div className="ai-lab-identity" aria-label="A four-stage, review-gated engineering process">
          <span className="ai-lab-identity-top">ENGINEERING / LEARNING SYSTEM <span>v.2026</span></span>
          <div className="ai-lab-orbit" aria-hidden="true"><span>?</span><i/><i/><i/></div>
          <strong>OBSERVE <span>→</span> VERIFY <span>→</span> DECIDE</strong>
          <small>Nothing becomes a rule because a model sounds confident.</small>
        </div>
      </div>

      <div className="ai-lab-signals" aria-label="Recorded engineering evidence">
        {aiLab.signals.map(signal => <div className="ai-lab-signal" key={signal.label}>
          <strong>{signal.value}</strong>
          <span>{signal.label}</span>
          <p>{signal.note}</p>
        </div>)}
      </div>

      <div className="ai-lab-workbench">
        <div className="ai-lab-workbench-head">
          <div>
            <span className="fm-kicker"><b>INTERACTIVE EXPLAINER</b> / SYNTHETIC EXAMPLES</span>
            <h3>See how I designed it to think.</h3>
          </div>
          <span className="ai-lab-demo-indicator"><span/> No live agent connected</span>
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
            <p>Switch scenarios to explore the decision process. These are illustrations, not executed requests.</p>
          </div>
          <div className="ai-lab-demo-screen" aria-live="polite" aria-atomic="true">
            <div className="ai-lab-screen-top"><span><i/> CASE / {scenario.eyebrow}</span><span>READ-ONLY DEMO</span></div>
            <p className="ai-lab-question">“{scenario.question}”</p>
            <div className="ai-lab-flow" aria-label="Decision sequence">
              {scenario.stages.map((step, index) => <div className="ai-lab-flow-step" key={step.name}>
                <div className="ai-lab-flow-rail"><span>{String(index+1).padStart(2,'0')}</span>{index < scenario.stages.length-1 && <i/>}</div>
                <div><strong>{step.name}</strong><p>{step.detail}</p></div>
              </div>)}
            </div>
            <div className="ai-lab-verdict">
              <div><span>DECISION GATE</span><strong>{scenario.verdict}</strong></div>
              <p>{scenario.outcome}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ai-lab-bottom">
        <p>{aiLab.disclaimer}</p>
        <a href="/work/evidence-driven-ai-workflows">Read the engineering decisions and limitations ↗</a>
      </div>
    </div>
  </section>;
}
