/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { i18n } from '@kbn/i18n';
import { ActionGroup } from '../../../../../alerts/common';

export const siemRuleActionGroups: Array<ActionGroup<'default'>> = [
  {
    id: 'default',
    name: i18n.translate(
      'xpack.securitySolution.detectionEngine.signalRuleAlert.actionGroups.default',
      {
        defaultMessage: 'Default',
      }
    ),
  },
];
