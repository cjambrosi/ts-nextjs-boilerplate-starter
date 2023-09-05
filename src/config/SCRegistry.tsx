'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

interface IStyledComponentsRegistryProps {
  children: React.ReactNode;
}

export default function StyledComponentsRegistry({
  children
}: IStyledComponentsRegistryProps): JSX.Element {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  // NextJS css-in-js: https://nextjs.org/docs/app/building-your-application/styling/css-in-js

  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager
      sheet={styledComponentsStyleSheet.instance}
      shouldForwardProp={(prop): boolean => prop !== 'theme'}
    >
      {children}
    </StyleSheetManager>
  );
}
