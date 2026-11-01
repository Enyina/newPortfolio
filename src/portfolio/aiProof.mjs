/**
 * Public-only summaries of the owner's personal engineering work.
 * The walkthrough below uses invented situations; it is not a live AI tool.
 */
export const aiLab = {
  eyebrow: 'PERSONAL PROJECT',
  title: 'I made my own tools for working with AI.',
  intro: 'I use coding assistants on different projects. Instead of starting from scratch every time, I built tools to carry over the right context, test new ideas and keep track of what actually worked.',
  disclaimer: 'The examples are fictional. The source code and original test sessions are private.',
  signals: [
    {value: '323', label: 'Local software checks', note: 'Passed in one recorded Codex run. Not a measure of AI quality.'},
    {value: '15 + 15', label: 'Answers compared', note: 'A baseline and a proposed skill on the same 15 writing tasks.'},
    {value: '2', label: 'Coding tools, one task record', note: 'A Git-backed handoff for Codex and Antigravity. A real cross-tool trial is still pending.'},
  ],
  principles: [
    {label: 'Find out what happened', explanation: 'Check the failure before touching the code.'},
    {label: 'Compare the results', explanation: 'Read the actual answers, not just the test score.'},
    {label: 'Keep work separate', explanation: 'Different projects should not share private details.'},
    {label: 'Make it easy to resume', explanation: 'Leave a clear record of completed work and what comes next.'},
  ],
};

export const labScenarios = [
  {
    id: 'investigate',
    label: 'Track down a bug',
    eyebrow: '01 / DEBUGGING',
    question: 'A feature stops working after an update.',
    verdict: 'Check what changed first.',
    outcome: 'The next fix should follow the evidence, not the first guess.',
    stages: [
      {name: 'See it fail', detail: 'Start with the error and the steps that reproduce it.'},
      {name: 'Check the change', detail: 'Look at the previous behavior and the code that changed.'},
      {name: 'Fix the cause', detail: 'Try a small correction and run the failing case again.'},
      {name: 'Keep the test', detail: 'Make sure the same bug is caught next time.'},
    ],
  },
  {
    id: 'evaluate',
    label: 'Look past the score',
    eyebrow: '02 / TESTING',
    question: 'A new writing skill gets a better test score.',
    verdict: 'I left that skill in testing.',
    outcome: 'One answer sounded better to the scorer but lost useful detail when I read it.',
    stages: [
      {name: 'Run a baseline', detail: 'Give Codex the 15 tasks without the new skill.'},
      {name: 'Try the change', detail: 'Repeat the tasks with the candidate skill.'},
      {name: 'Read the results', detail: 'A keyword match is not the same as a useful answer.'},
      {name: 'Decide', detail: 'If it makes a result worse, keep working on it.'},
    ],
  },
  {
    id: 'defend',
    label: 'Keep projects separate',
    eyebrow: '03 / PERMISSIONS',
    question: 'A tool suggests reading files from another project.',
    verdict: 'Check access before doing anything.',
    outcome: 'A useful suggestion is not permission to open unrelated private work.',
    stages: [
      {name: 'Check the project', detail: 'Which project am I working in, and who owns it?'},
      {name: 'Check permission', detail: 'Only use files and tools available for that task.'},
      {name: 'Test the boundary', detail: 'Try safe examples that should be rejected.'},
      {name: 'Record the result', detail: 'Keep only shareable lessons in the personal toolkit.'},
    ],
  },
  {
    id: 'handoff',
    label: 'Pick up in another tool',
    eyebrow: '04 / CONTINUITY',
    question: 'I switch from Codex to Antigravity halfway through a task.',
    verdict: 'Continue from a checked handoff.',
    outcome: 'The handoff format exists, but a complete two-tool round trip still needs testing.',
    stages: [
      {name: 'Save progress', detail: 'Record the branch, changes, tests and what is unfinished.'},
      {name: 'Check the record', detail: 'Compare the handoff with the files and latest commit.'},
      {name: 'Continue safely', detail: 'Do not repeat a completed step or overwrite another session.'},
      {name: 'Prove the handoff', detail: 'Test a real Codex-to-Antigravity-to-Codex round trip.'},
    ],
  },
];

export const aiCaseEvidence = [
  {
    label: 'Software tests',
    finding: '323 checks passed locally',
    level: 'Local test run',
    detail: 'Checks passed in one recorded Codex run. That tests the tooling, not whether every AI suggestion is good.',
  },
  {
    label: 'Writing experiment',
    finding: '9/15 → 11/15',
    level: 'Still inconclusive',
    detail: 'A proposed skill passed more phrase checks. Reading the answers exposed a trade-off, so I did not approve it.',
  },
  {
    label: 'Working across tools',
    finding: 'Codex + Antigravity',
    level: 'Handoff built; trial pending',
    detail: 'They can use the same Git-backed task format. A real end-to-end handoff has not been confirmed yet.',
  },
];
