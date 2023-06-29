/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
import chroma from 'chroma-js';

export const computeGradientFinalColor = (color: string): string => {
  let inputColor = chroma(color);
  const [h,s,l] = inputColor.hsl();
  const lightness = l - inputColor.luminance();
  return chroma.hsl(h,s,lightness).css();
};
