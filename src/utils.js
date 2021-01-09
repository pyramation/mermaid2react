import loadScript from 'load-script';
export const DEFAULT_SCRIPT =
  process.env.MERMAID_CDN ||
  'https://cdnjs.cloudflare.com/ajax/libs/mermaid/8.8.4/mermaid.min.js';

const DEFAULT_OPTIONS = {
  startOnLoad: true,
  theme: 'neutral',
  logLevel: 'fatal',
  securityLevel: 'strict',
  arrowMarkerAbsolute: false,
  flowchart: {
    htmlLabels: true,
    curve: 'linear'
  },
  sequence: {
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    mirrorActors: true,
    bottomMarginAdj: 1,
    useMaxWidth: true,
    rightAngles: false,
    showSequenceNumbers: false
  },
  gantt: {
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    fontFamily: '"Open-Sans", "sans-serif"',
    numberSectionStyles: 4,
    axisFormat: '%Y-%m-%d'
  }
};

export const getMermaid = () =>
  typeof window === 'undefined'
    ? undefined
    : typeof window.mermaid === 'undefined'
    ? undefined
    : window.mermaid;

export const loadMermaid = (
  callback = () => {},
  script = DEFAULT_SCRIPT,
  options = DEFAULT_OPTIONS
) => {
  const onLoad = () => {
    window.mermaid.initialize({ ...options });
    callback();
  };
  if (!script) {
    return onLoad();
  }
  loadScript(script, onLoad);
};
