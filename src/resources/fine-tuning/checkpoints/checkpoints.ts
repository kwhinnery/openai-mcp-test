// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PermissionsAPI from './permissions';
import {
  ListFineTuningCheckpointPermissionResponse,
  PermissionCreateParams,
  PermissionDeleteParams,
  PermissionDeleteResponse,
  PermissionRetrieveParams,
  Permissions,
} from './permissions';

export class Checkpoints extends APIResource {
  permissions: PermissionsAPI.Permissions = new PermissionsAPI.Permissions(this._client);
}

Checkpoints.Permissions = Permissions;

export declare namespace Checkpoints {
  export {
    Permissions as Permissions,
    type ListFineTuningCheckpointPermissionResponse as ListFineTuningCheckpointPermissionResponse,
    type PermissionDeleteResponse as PermissionDeleteResponse,
    type PermissionCreateParams as PermissionCreateParams,
    type PermissionRetrieveParams as PermissionRetrieveParams,
    type PermissionDeleteParams as PermissionDeleteParams,
  };
}
