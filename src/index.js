import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { getMermaid, loadMermaid } from './utils';

const CenteredWrapper = styled.div`
  ${(props) => {
    return css`
      svg {
        width: 100% !important;
        max-width: 100% !important;
      }
    `;
  }};
`;

export const Mermaid = ({ chart, options, wrap = false }) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    window.mermaid.contentLoaded();
    setLoaded(true);
  };

  useEffect(() => {
    if (getMermaid()) {
      onLoad();
    }
    loadMermaid(onLoad, options);
  }, [chart, options]);

  if (!loaded || !chart) return null;
  if (wrap) {
    return <CenteredWrapper className="mermaid">{chart}</CenteredWrapper>;
  } else {
    return <div className="mermaid">{chart}</div>;
  }
};
