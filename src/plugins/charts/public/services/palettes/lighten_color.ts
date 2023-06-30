/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import chroma from 'chroma-js';

const MAX_LIGHTNESS = 93;
const MAX_LIGHTNESS_SPACE = 20;

export function lightenColor(baseColor: string, step: number, totalSteps: number): string {
  if (totalSteps === 1) {
    return baseColor;
  }

  const [h, s, l] = chroma(baseColor).hsl();
  const lightnessSpace = Math.min(MAX_LIGHTNESS - l, MAX_LIGHTNESS_SPACE);
  const currentLevelTargetLightness = l + lightnessSpace * ((step - 1) / (totalSteps - 1));
  return chroma.hsl(h, s, currentLevelTargetLightness / 100).hex();
}
