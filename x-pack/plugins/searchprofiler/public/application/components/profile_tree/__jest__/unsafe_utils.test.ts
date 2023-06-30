/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import * as util from '../unsafe_utils';
import { normalized, breakdown } from './fixtures/breakdown';
import { inputTimes, normalizedTimes } from './fixtures/normalize_times';
import { inputIndices, normalizedIndices } from './fixtures/normalize_indices';

describe('normalizeBreakdown', function () {
  it('returns correct breakdown', function () {
    const result = util.normalizeBreakdown(breakdown);
    console.log(JSON.stringify(result, null, 2));
    console.log(JSON.stringify(normalized, null, 2));
    expect(result).toEqual(normalized);
  });
});

describe('normalizeTime', function () {
  it('returns correct normalization', function () {
    const totalTime = 0.447365;

    // Deep clone the object to preserve the original
    const input = JSON.parse(JSON.stringify(inputTimes));

    // Simulate recursive application to the tree.
    input.forEach((i: any) => util.normalizeTime(i, totalTime));
    input[0].children.forEach((i: any) => util.normalizeTime(i, totalTime));

    // Modifies in place, so inputTimes will change
    expect(input).toEqual(normalizedTimes);
  });
});

describe('normalizeIndices', function () {
  it('returns correct ordering', function () {
    // Deep clone the object to preserve the original
    const input = JSON.parse(JSON.stringify(inputIndices));
    util.normalizeIndices(input, 'searches');
    const result = util.sortIndices(input);
    expect(result).toEqual(normalizedIndices);
  });
});
