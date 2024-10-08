/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import * as estypes from '@elastic/elasticsearch/lib/api/typesWithBodyKey';
import { Filter, FILTERS, FilterStateStore } from './types';

/** @public */
export type CustomFilter = Filter;

/**
 *
 * @param indexPatternString
 * @param queryDsl
 * @param disabled
 * @param negate
 * @param alias
 * @param store
 * @returns
 *
 * @public
 */
export function buildCustomFilter(
  indexPatternString: string,
  query: estypes.QueryDslQueryContainer,
  disabled: boolean,
  negate: boolean,
  alias: string | null,
  store: FilterStateStore
): Filter {
  return {
    query,
    meta: {
      index: indexPatternString,
      type: FILTERS.CUSTOM,
      disabled,
      negate,
      alias,
    },
    $state: { store },
  };
}
