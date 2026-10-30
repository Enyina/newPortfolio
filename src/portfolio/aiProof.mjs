/**
 * Public copy for a synthetic walkthrough of personal engineering work.
 * Private source, original agent traces and employer information stay out.
 */
export const aiLab = {
  eyebrow: 'SIDE PROJECT / 2026',
  title: 'AI can write code. I built something that questions it.',
  intro: 'I use AI every day. But fast answers can still be wrong, so I built my own engineering system to investigate problems, test suggestions and keep bad rules from spreading.',
  disclaimer: 'This is a walkthrough with made-up examples, not a live AI demo. My code and original test sessions stay private.',
  signals: [
    {value: '323', label: 'Software tests passed', note: 'One local Codex run. This tests the software, not the intelligence of the AI.'},
    {value: '15 × 2', label: 'Codex answers compared', note: 'The same 15 tasks, with and without a proposed skill.'},
    {value: '22', label: 'Skill ideas in review', note: 'MCP skills I am developing and testing, not rules already rolled out.'},
  ],
  principles: [
    {label: 'Start with the problem', explanation: 'Look at what is actually happening before reaching for a fix.'},
    {label: 'Test the answer', explanation: 'A convincing response still has to hold up to real examples.'},
    {label: 'Keep projects separate', explanation: 'Private work stays private, and access is earned, not assumed.'},
    {label: 'Know how to undo it', explanation: 'No new rule should be hard to take back.'},
  ],
};

export const labScenarios = [
  {
    id: 'investigate',
    label: 'Track down a bug',
    eyebrow: '01 / DEBUGGING',
    question: 'Something breaks right after a release.',
    verdict: 'Find the cause before changing code',
    outcome: 'Figure out what changed, reproduce the problem, and fix the right thing.',
    stages: [
      {name: 'Look', detail: 'What failed? What do the logs and the user actually tell us?'},
      {name: 'Compare', detail: 'Check what worked before and what changed in this release.'},
      {name: 'Test', detail: 'Reproduce the issue and try the smallest sensible fix.'},
      {name: 'Remember', detail: 'Turn the lesson into a reusable check once it holds up.'},
    ],
  },
  {
    id: 'evaluate',
    label: 'Look past the score',
    eyebrow: '02 / TESTING',
    question: 'An AI skill scores 11 out of 15, up from 9.',
    verdict: 'A higher score is not enough',
    outcome: 'One answer lost useful context. I kept the skill in testing instead of approving it.',
    stages: [
      {name: 'Run it without', detail: 'Give Codex 15 tasks with the usual setup.'},
      {name: 'Run it with', detail: 'Use the same tasks again, this time with the new skill.'},
      {name: 'Read the answers', detail: 'Check whether the actual writing got better, not just the score.'},
      {name: 'Make the call', detail: 'If an improvement does not hold up, do not ship it.'},
    ],
  },
  {
    id: 'defend',
    label: 'Ignore bad instructions',
    eyebrow: '03 / SECURITY',
    question: 'A document tells the assistant to skip approval and install a rule.',
    verdict: 'The document does not get to decide',
    outcome: 'I want the assistant to read untrusted text without treating it as permission.',
    stages: [
      {name: 'Spot it', detail: 'An instruction inside a document is not a command from the user.'},
      {name: 'Check access', detail: 'Do not open a private project just because the document asks.'},
      {name: 'Try to break it', detail: 'Test how the system handles misleading and malicious text.'},
      {name: 'Keep control', detail: 'Only the authorized owner can approve a change.'},
    ],
  },
  {
    id: 'recover',
    label: 'Know how to undo it',
    eyebrow: '04 / RECOVERY',
    question: 'A new rule works in testing but fails later.',
    verdict: 'Go back to the last good version',
    outcome: 'This is a design goal I am still testing—not a completed rollback demonstration.',
    stages: [
      {name: 'Keep a copy', detail: 'Record the old version before trying the new one.'},
      {name: 'Watch the result', detail: 'Check what actually changes after rollout.'},
      {name: 'Undo safely', detail: 'If things get worse, restore the version that worked.'},
      {name: 'Prove it works', detail: 'Test the whole recovery process before calling it done.'},
    ],
  },
];

export const aiCaseEvidence = [
  {
    label: 'Software tests',
    finding: '323 checks passed locally',
    level: 'Tested locally',
    detail: 'One Codex run passed 323 software tests. It says something about the tooling; it does not prove the AI is smarter.',
  },
  {
    label: 'Codex experiment',
    finding: '9/15 → 11/15',
    level: 'Not a proven improvement',
    detail: 'The new skill did better on phrase matching. Reading the answers showed that one supposed improvement made the wording less clear, so I did not approve it.',
  },
  {
    label: 'MCP skills',
    finding: '22 skill ideas',
    level: 'Still in development',
    detail: 'I am building guidance for tool contracts, authentication, testing and safer releases. These are proposals, not finished integrations.',
  },
];
