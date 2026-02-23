// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrganizationAPI from './organization';
import * as AdminAPIKeysAPI from './admin-api-keys';
import {
  AdminAPIKey,
  AdminAPIKeyCreateParams,
  AdminAPIKeyDeleteResponse,
  AdminAPIKeyListParams,
  AdminAPIKeyListResponse,
  AdminAPIKeys,
} from './admin-api-keys';
import * as CertificatesAPI from './certificates';
import {
  Certificate as CertificatesAPICertificate,
  CertificateActivateParams,
  CertificateDeactivateParams,
  CertificateDeleteResponse,
  CertificateListParams,
  CertificateRetrieveParams,
  CertificateUpdateParams,
  CertificateUploadParams,
  Certificates,
  ListCertificates,
  ToggleCertificates,
} from './certificates';
import * as InvitesAPI from './invites';
import {
  Invite,
  InviteCreateParams,
  InviteDeleteResponse,
  InviteListParams,
  InviteListResponse,
  Invites,
} from './invites';
import * as RolesAPI from './roles';
import {
  CreateRole,
  DeletedRole,
  Role,
  RoleCreateParams,
  RoleListAvailable,
  RoleListParams,
  RoleUpdateParams,
  Roles,
  UpdateRole,
} from './roles';
import * as UsageAPI from './usage';
import {
  Usage,
  UsageAudioSpeechesParams,
  UsageAudioTranscriptionsParams,
  UsageCodeInterpreterSessionsParams,
  UsageCompletionsParams,
  UsageEmbeddingsParams,
  UsageImagesParams,
  UsageModerationsParams,
  UsageVectorStoresParams,
} from './usage';
import * as GroupsAPI from './groups/groups';
import {
  GroupCreateParams,
  GroupDeleteResponse,
  GroupListParams,
  GroupListResponse,
  GroupResponse,
  GroupUpdateParams,
  GroupUpdateResponse,
  Groups,
} from './groups/groups';
import * as ProjectsAPI from './projects/projects';
import {
  Project as ProjectsAPIProject,
  ProjectCreateParams,
  ProjectListParams,
  ProjectListResponse,
  ProjectUpdateParams,
  Projects,
} from './projects/projects';
import * as UsersAPI from './users/users';
import {
  User,
  UserDeleteResponse,
  UserListParams,
  UserListResponse,
  UserUpdateParams,
  Users,
} from './users/users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Organization extends APIResource {
  adminAPIKeys: AdminAPIKeysAPI.AdminAPIKeys = new AdminAPIKeysAPI.AdminAPIKeys(this._client);
  certificates: CertificatesAPI.Certificates = new CertificatesAPI.Certificates(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  invites: InvitesAPI.Invites = new InvitesAPI.Invites(this._client);
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * Get costs details for the organization.
   *
   * @example
   * ```ts
   * const usageResponse = await client.organization.getCosts({
   *   start_time: 0,
   * });
   * ```
   */
  getCosts(query: OrganizationGetCostsParams, options?: RequestOptions): APIPromise<UsageResponse> {
    return this._client.get('/organization/costs', { query, ...options });
  }

  /**
   * List user actions and configuration changes within this organization.
   *
   * @example
   * ```ts
   * const response = await client.organization.listAuditLogs();
   * ```
   */
  listAuditLogs(
    query: OrganizationListAuditLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationListAuditLogsResponse> {
    return this._client.get('/organization/audit_logs', { query, ...options });
  }
}

/**
 * The user who performed the audit logged action.
 */
export interface AuditLogActorUser {
  /**
   * The user id.
   */
  id?: string;

  /**
   * The user email.
   */
  email?: string;
}

/**
 * The event type.
 */
export type AuditLogEventType =
  | 'api_key.created'
  | 'api_key.updated'
  | 'api_key.deleted'
  | 'certificate.created'
  | 'certificate.updated'
  | 'certificate.deleted'
  | 'certificates.activated'
  | 'certificates.deactivated'
  | 'checkpoint.permission.created'
  | 'checkpoint.permission.deleted'
  | 'external_key.registered'
  | 'external_key.removed'
  | 'group.created'
  | 'group.updated'
  | 'group.deleted'
  | 'invite.sent'
  | 'invite.accepted'
  | 'invite.deleted'
  | 'ip_allowlist.created'
  | 'ip_allowlist.updated'
  | 'ip_allowlist.deleted'
  | 'ip_allowlist.config.activated'
  | 'ip_allowlist.config.deactivated'
  | 'login.succeeded'
  | 'login.failed'
  | 'logout.succeeded'
  | 'logout.failed'
  | 'organization.updated'
  | 'project.created'
  | 'project.updated'
  | 'project.archived'
  | 'project.deleted'
  | 'rate_limit.updated'
  | 'rate_limit.deleted'
  | 'resource.deleted'
  | 'tunnel.created'
  | 'tunnel.updated'
  | 'tunnel.deleted'
  | 'role.created'
  | 'role.updated'
  | 'role.deleted'
  | 'role.assignment.created'
  | 'role.assignment.deleted'
  | 'scim.enabled'
  | 'scim.disabled'
  | 'service_account.created'
  | 'service_account.updated'
  | 'service_account.deleted'
  | 'user.added'
  | 'user.updated'
  | 'user.deleted';

export interface UsageResponse {
  data: Array<UsageResponse.Data>;

  has_more: boolean;

  next_page: string;

  object: 'page';
}

export namespace UsageResponse {
  export interface Data {
    end_time: number;

    object: 'bucket';

    result: Array<
      | Data.UsageCompletionsResult
      | Data.UsageEmbeddingsResult
      | Data.UsageModerationsResult
      | Data.UsageImagesResult
      | Data.UsageAudioSpeechesResult
      | Data.UsageAudioTranscriptionsResult
      | Data.UsageVectorStoresResult
      | Data.UsageCodeInterpreterSessionsResult
      | Data.CostsResult
    >;

    start_time: number;
  }

  export namespace Data {
    /**
     * The aggregated completions usage details of the specific time bucket.
     */
    export interface UsageCompletionsResult {
      /**
       * The aggregated number of text input tokens used, including cached tokens. For
       * customers subscribe to scale tier, this includes scale tier tokens.
       */
      input_tokens: number;

      /**
       * The count of requests made to the model.
       */
      num_model_requests: number;

      object: 'organization.usage.completions.result';

      /**
       * The aggregated number of text output tokens used. For customers subscribe to
       * scale tier, this includes scale tier tokens.
       */
      output_tokens: number;

      /**
       * When `group_by=api_key_id`, this field provides the API key ID of the grouped
       * usage result.
       */
      api_key_id?: string | null;

      /**
       * When `group_by=batch`, this field tells whether the grouped usage result is
       * batch or not.
       */
      batch?: boolean | null;

      /**
       * The aggregated number of audio input tokens used, including cached tokens.
       */
      input_audio_tokens?: number;

      /**
       * The aggregated number of text input tokens that has been cached from previous
       * requests. For customers subscribe to scale tier, this includes scale tier
       * tokens.
       */
      input_cached_tokens?: number;

      /**
       * When `group_by=model`, this field provides the model name of the grouped usage
       * result.
       */
      model?: string | null;

      /**
       * The aggregated number of audio output tokens used.
       */
      output_audio_tokens?: number;

      /**
       * When `group_by=project_id`, this field provides the project ID of the grouped
       * usage result.
       */
      project_id?: string | null;

      /**
       * When `group_by=service_tier`, this field provides the service tier of the
       * grouped usage result.
       */
      service_tier?: string | null;

      /**
       * When `group_by=user_id`, this field provides the user ID of the grouped usage
       * result.
       */
      user_id?: string | null;
    }

    /**
     * The aggregated embeddings usage details of the specific time bucket.
     */
    export interface UsageEmbeddingsResult {
      /**
       * The aggregated number of input tokens used.
       */
      input_tokens: number;

      /**
       * The count of requests made to the model.
       */
      num_model_requests: number;

      object: 'organization.usage.embeddings.result';

      /**
       * When `group_by=api_key_id`, this field provides the API key ID of the grouped
       * usage result.
       */
      api_key_id?: string | null;

      /**
       * When `group_by=model`, this field provides the model name of the grouped usage
       * result.
       */
      model?: string | null;

      /**
       * When `group_by=project_id`, this field provides the project ID of the grouped
       * usage result.
       */
      project_id?: string | null;

      /**
       * When `group_by=user_id`, this field provides the user ID of the grouped usage
       * result.
       */
      user_id?: string | null;
    }

    /**
     * The aggregated moderations usage details of the specific time bucket.
     */
    export interface UsageModerationsResult {
      /**
       * The aggregated number of input tokens used.
       */
      input_tokens: number;

      /**
       * The count of requests made to the model.
       */
      num_model_requests: number;

      object: 'organization.usage.moderations.result';

      /**
       * When `group_by=api_key_id`, this field provides the API key ID of the grouped
       * usage result.
       */
      api_key_id?: string | null;

      /**
       * When `group_by=model`, this field provides the model name of the grouped usage
       * result.
       */
      model?: string | null;

      /**
       * When `group_by=project_id`, this field provides the project ID of the grouped
       * usage result.
       */
      project_id?: string | null;

      /**
       * When `group_by=user_id`, this field provides the user ID of the grouped usage
       * result.
       */
      user_id?: string | null;
    }

    /**
     * The aggregated images usage details of the specific time bucket.
     */
    export interface UsageImagesResult {
      /**
       * The number of images processed.
       */
      images: number;

      /**
       * The count of requests made to the model.
       */
      num_model_requests: number;

      object: 'organization.usage.images.result';

      /**
       * When `group_by=api_key_id`, this field provides the API key ID of the grouped
       * usage result.
       */
      api_key_id?: string | null;

      /**
       * When `group_by=model`, this field provides the model name of the grouped usage
       * result.
       */
      model?: string | null;

      /**
       * When `group_by=project_id`, this field provides the project ID of the grouped
       * usage result.
       */
      project_id?: string | null;

      /**
       * When `group_by=size`, this field provides the image size of the grouped usage
       * result.
       */
      size?: string | null;

      /**
       * When `group_by=source`, this field provides the source of the grouped usage
       * result, possible values are `image.generation`, `image.edit`, `image.variation`.
       */
      source?: string | null;

      /**
       * When `group_by=user_id`, this field provides the user ID of the grouped usage
       * result.
       */
      user_id?: string | null;
    }

    /**
     * The aggregated audio speeches usage details of the specific time bucket.
     */
    export interface UsageAudioSpeechesResult {
      /**
       * The number of characters processed.
       */
      characters: number;

      /**
       * The count of requests made to the model.
       */
      num_model_requests: number;

      object: 'organization.usage.audio_speeches.result';

      /**
       * When `group_by=api_key_id`, this field provides the API key ID of the grouped
       * usage result.
       */
      api_key_id?: string | null;

      /**
       * When `group_by=model`, this field provides the model name of the grouped usage
       * result.
       */
      model?: string | null;

      /**
       * When `group_by=project_id`, this field provides the project ID of the grouped
       * usage result.
       */
      project_id?: string | null;

      /**
       * When `group_by=user_id`, this field provides the user ID of the grouped usage
       * result.
       */
      user_id?: string | null;
    }

    /**
     * The aggregated audio transcriptions usage details of the specific time bucket.
     */
    export interface UsageAudioTranscriptionsResult {
      /**
       * The count of requests made to the model.
       */
      num_model_requests: number;

      object: 'organization.usage.audio_transcriptions.result';

      /**
       * The number of seconds processed.
       */
      seconds: number;

      /**
       * When `group_by=api_key_id`, this field provides the API key ID of the grouped
       * usage result.
       */
      api_key_id?: string | null;

      /**
       * When `group_by=model`, this field provides the model name of the grouped usage
       * result.
       */
      model?: string | null;

      /**
       * When `group_by=project_id`, this field provides the project ID of the grouped
       * usage result.
       */
      project_id?: string | null;

      /**
       * When `group_by=user_id`, this field provides the user ID of the grouped usage
       * result.
       */
      user_id?: string | null;
    }

    /**
     * The aggregated vector stores usage details of the specific time bucket.
     */
    export interface UsageVectorStoresResult {
      object: 'organization.usage.vector_stores.result';

      /**
       * The vector stores usage in bytes.
       */
      usage_bytes: number;

      /**
       * When `group_by=project_id`, this field provides the project ID of the grouped
       * usage result.
       */
      project_id?: string | null;
    }

    /**
     * The aggregated code interpreter sessions usage details of the specific time
     * bucket.
     */
    export interface UsageCodeInterpreterSessionsResult {
      object: 'organization.usage.code_interpreter_sessions.result';

      /**
       * The number of code interpreter sessions.
       */
      num_sessions?: number;

      /**
       * When `group_by=project_id`, this field provides the project ID of the grouped
       * usage result.
       */
      project_id?: string | null;
    }

    /**
     * The aggregated costs details of the specific time bucket.
     */
    export interface CostsResult {
      object: 'organization.costs.result';

      /**
       * The monetary value in its associated currency.
       */
      amount?: CostsResult.Amount;

      /**
       * When `group_by=line_item`, this field provides the line item of the grouped
       * costs result.
       */
      line_item?: string | null;

      /**
       * When `group_by=project_id`, this field provides the project ID of the grouped
       * costs result.
       */
      project_id?: string | null;
    }

    export namespace CostsResult {
      /**
       * The monetary value in its associated currency.
       */
      export interface Amount {
        /**
         * Lowercase ISO-4217 currency e.g. "usd"
         */
        currency?: string;

        /**
         * The numeric value of the cost.
         */
        value?: number;
      }
    }
  }
}

export interface OrganizationListAuditLogsResponse {
  data: Array<OrganizationListAuditLogsResponse.Data>;

  first_id: string;

  has_more: boolean;

  last_id: string;

  object: 'list';
}

export namespace OrganizationListAuditLogsResponse {
  /**
   * A log of a user action or configuration change within this organization.
   */
  export interface Data {
    /**
     * The ID of this log.
     */
    id: string;

    /**
     * The actor who performed the audit logged action.
     */
    actor: Data.Actor;

    /**
     * The Unix timestamp (in seconds) of the event.
     */
    effective_at: number;

    /**
     * The event type.
     */
    type: OrganizationAPI.AuditLogEventType;

    /**
     * The details for events with this `type`.
     */
    'api_key.created'?: Data.APIKeyCreated;

    /**
     * The details for events with this `type`.
     */
    'api_key.deleted'?: Data.APIKeyDeleted;

    /**
     * The details for events with this `type`.
     */
    'api_key.updated'?: Data.APIKeyUpdated;

    /**
     * The details for events with this `type`.
     */
    'certificate.created'?: Data.CertificateCreated;

    /**
     * The details for events with this `type`.
     */
    'certificate.deleted'?: Data.CertificateDeleted;

    /**
     * The details for events with this `type`.
     */
    'certificate.updated'?: Data.CertificateUpdated;

    /**
     * The details for events with this `type`.
     */
    'certificates.activated'?: Data.CertificatesActivated;

    /**
     * The details for events with this `type`.
     */
    'certificates.deactivated'?: Data.CertificatesDeactivated;

    /**
     * The project and fine-tuned model checkpoint that the checkpoint permission was
     * created for.
     */
    'checkpoint.permission.created'?: Data.CheckpointPermissionCreated;

    /**
     * The details for events with this `type`.
     */
    'checkpoint.permission.deleted'?: Data.CheckpointPermissionDeleted;

    /**
     * The details for events with this `type`.
     */
    'external_key.registered'?: Data.ExternalKeyRegistered;

    /**
     * The details for events with this `type`.
     */
    'external_key.removed'?: Data.ExternalKeyRemoved;

    /**
     * The details for events with this `type`.
     */
    'group.created'?: Data.GroupCreated;

    /**
     * The details for events with this `type`.
     */
    'group.deleted'?: Data.GroupDeleted;

    /**
     * The details for events with this `type`.
     */
    'group.updated'?: Data.GroupUpdated;

    /**
     * The details for events with this `type`.
     */
    'invite.accepted'?: Data.InviteAccepted;

    /**
     * The details for events with this `type`.
     */
    'invite.deleted'?: Data.InviteDeleted;

    /**
     * The details for events with this `type`.
     */
    'invite.sent'?: Data.InviteSent;

    /**
     * The details for events with this `type`.
     */
    'ip_allowlist.config.activated'?: Data.IPAllowlistConfigActivated;

    /**
     * The details for events with this `type`.
     */
    'ip_allowlist.config.deactivated'?: Data.IPAllowlistConfigDeactivated;

    /**
     * The details for events with this `type`.
     */
    'ip_allowlist.created'?: Data.IPAllowlistCreated;

    /**
     * The details for events with this `type`.
     */
    'ip_allowlist.deleted'?: Data.IPAllowlistDeleted;

    /**
     * The details for events with this `type`.
     */
    'ip_allowlist.updated'?: Data.IPAllowlistUpdated;

    /**
     * The details for events with this `type`.
     */
    'login.failed'?: Data.LoginFailed;

    /**
     * This event has no additional fields beyond the standard audit log attributes.
     */
    'login.succeeded'?: unknown;

    /**
     * The details for events with this `type`.
     */
    'logout.failed'?: Data.LogoutFailed;

    /**
     * This event has no additional fields beyond the standard audit log attributes.
     */
    'logout.succeeded'?: unknown;

    /**
     * The details for events with this `type`.
     */
    'organization.updated'?: Data.OrganizationUpdated;

    /**
     * The project that the action was scoped to. Absent for actions not scoped to
     * projects. Note that any admin actions taken via Admin API keys are associated
     * with the default project.
     */
    project?: Data.Project;

    /**
     * The details for events with this `type`.
     */
    'project.archived'?: Data.ProjectArchived;

    /**
     * The details for events with this `type`.
     */
    'project.created'?: Data.ProjectCreated;

    /**
     * The details for events with this `type`.
     */
    'project.deleted'?: Data.ProjectDeleted;

    /**
     * The details for events with this `type`.
     */
    'project.updated'?: Data.ProjectUpdated;

    /**
     * The details for events with this `type`.
     */
    'rate_limit.deleted'?: Data.RateLimitDeleted;

    /**
     * The details for events with this `type`.
     */
    'rate_limit.updated'?: Data.RateLimitUpdated;

    /**
     * The details for events with this `type`.
     */
    'role.assignment.created'?: Data.RoleAssignmentCreated;

    /**
     * The details for events with this `type`.
     */
    'role.assignment.deleted'?: Data.RoleAssignmentDeleted;

    /**
     * The details for events with this `type`.
     */
    'role.created'?: Data.RoleCreated;

    /**
     * The details for events with this `type`.
     */
    'role.deleted'?: Data.RoleDeleted;

    /**
     * The details for events with this `type`.
     */
    'role.updated'?: Data.RoleUpdated;

    /**
     * The details for events with this `type`.
     */
    'scim.disabled'?: Data.ScimDisabled;

    /**
     * The details for events with this `type`.
     */
    'scim.enabled'?: Data.ScimEnabled;

    /**
     * The details for events with this `type`.
     */
    'service_account.created'?: Data.ServiceAccountCreated;

    /**
     * The details for events with this `type`.
     */
    'service_account.deleted'?: Data.ServiceAccountDeleted;

    /**
     * The details for events with this `type`.
     */
    'service_account.updated'?: Data.ServiceAccountUpdated;

    /**
     * The details for events with this `type`.
     */
    'user.added'?: Data.UserAdded;

    /**
     * The details for events with this `type`.
     */
    'user.deleted'?: Data.UserDeleted;

    /**
     * The details for events with this `type`.
     */
    'user.updated'?: Data.UserUpdated;
  }

  export namespace Data {
    /**
     * The actor who performed the audit logged action.
     */
    export interface Actor {
      /**
       * The API Key used to perform the audit logged action.
       */
      api_key?: Actor.APIKey;

      /**
       * The session in which the audit logged action was performed.
       */
      session?: Actor.Session;

      /**
       * The type of actor. Is either `session` or `api_key`.
       */
      type?: 'session' | 'api_key';
    }

    export namespace Actor {
      /**
       * The API Key used to perform the audit logged action.
       */
      export interface APIKey {
        /**
         * The tracking id of the API key.
         */
        id?: string;

        /**
         * The service account that performed the audit logged action.
         */
        service_account?: APIKey.ServiceAccount;

        /**
         * The type of API key. Can be either `user` or `service_account`.
         */
        type?: 'user' | 'service_account';

        /**
         * The user who performed the audit logged action.
         */
        user?: OrganizationAPI.AuditLogActorUser;
      }

      export namespace APIKey {
        /**
         * The service account that performed the audit logged action.
         */
        export interface ServiceAccount {
          /**
           * The service account id.
           */
          id?: string;
        }
      }

      /**
       * The session in which the audit logged action was performed.
       */
      export interface Session {
        /**
         * The IP address from which the action was performed.
         */
        ip_address?: string;

        /**
         * The user who performed the audit logged action.
         */
        user?: OrganizationAPI.AuditLogActorUser;
      }
    }

    /**
     * The details for events with this `type`.
     */
    export interface APIKeyCreated {
      /**
       * The tracking ID of the API key.
       */
      id?: string;

      /**
       * The payload used to create the API key.
       */
      data?: APIKeyCreated.Data;
    }

    export namespace APIKeyCreated {
      /**
       * The payload used to create the API key.
       */
      export interface Data {
        /**
         * A list of scopes allowed for the API key, e.g. `["api.model.request"]`
         */
        scopes?: Array<string>;
      }
    }

    /**
     * The details for events with this `type`.
     */
    export interface APIKeyDeleted {
      /**
       * The tracking ID of the API key.
       */
      id?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface APIKeyUpdated {
      /**
       * The tracking ID of the API key.
       */
      id?: string;

      /**
       * The payload used to update the API key.
       */
      changes_requested?: APIKeyUpdated.ChangesRequested;
    }

    export namespace APIKeyUpdated {
      /**
       * The payload used to update the API key.
       */
      export interface ChangesRequested {
        /**
         * A list of scopes allowed for the API key, e.g. `["api.model.request"]`
         */
        scopes?: Array<string>;
      }
    }

    /**
     * The details for events with this `type`.
     */
    export interface CertificateCreated {
      /**
       * The certificate ID.
       */
      id?: string;

      /**
       * The name of the certificate.
       */
      name?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface CertificateDeleted {
      /**
       * The certificate ID.
       */
      id?: string;

      /**
       * The certificate content in PEM format.
       */
      certificate?: string;

      /**
       * The name of the certificate.
       */
      name?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface CertificateUpdated {
      /**
       * The certificate ID.
       */
      id?: string;

      /**
       * The name of the certificate.
       */
      name?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface CertificatesActivated {
      certificates?: Array<CertificatesActivated.Certificate>;
    }

    export namespace CertificatesActivated {
      export interface Certificate {
        /**
         * The certificate ID.
         */
        id?: string;

        /**
         * The name of the certificate.
         */
        name?: string;
      }
    }

    /**
     * The details for events with this `type`.
     */
    export interface CertificatesDeactivated {
      certificates?: Array<CertificatesDeactivated.Certificate>;
    }

    export namespace CertificatesDeactivated {
      export interface Certificate {
        /**
         * The certificate ID.
         */
        id?: string;

        /**
         * The name of the certificate.
         */
        name?: string;
      }
    }

    /**
     * The project and fine-tuned model checkpoint that the checkpoint permission was
     * created for.
     */
    export interface CheckpointPermissionCreated {
      /**
       * The ID of the checkpoint permission.
       */
      id?: string;

      /**
       * The payload used to create the checkpoint permission.
       */
      data?: CheckpointPermissionCreated.Data;
    }

    export namespace CheckpointPermissionCreated {
      /**
       * The payload used to create the checkpoint permission.
       */
      export interface Data {
        /**
         * The ID of the fine-tuned model checkpoint.
         */
        fine_tuned_model_checkpoint?: string;

        /**
         * The ID of the project that the checkpoint permission was created for.
         */
        project_id?: string;
      }
    }

    /**
     * The details for events with this `type`.
     */
    export interface CheckpointPermissionDeleted {
      /**
       * The ID of the checkpoint permission.
       */
      id?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface ExternalKeyRegistered {
      /**
       * The ID of the external key configuration.
       */
      id?: string;

      /**
       * The configuration for the external key.
       */
      data?: unknown;
    }

    /**
     * The details for events with this `type`.
     */
    export interface ExternalKeyRemoved {
      /**
       * The ID of the external key configuration.
       */
      id?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface GroupCreated {
      /**
       * The ID of the group.
       */
      id?: string;

      /**
       * Information about the created group.
       */
      data?: GroupCreated.Data;
    }

    export namespace GroupCreated {
      /**
       * Information about the created group.
       */
      export interface Data {
        /**
         * The group name.
         */
        group_name?: string;
      }
    }

    /**
     * The details for events with this `type`.
     */
    export interface GroupDeleted {
      /**
       * The ID of the group.
       */
      id?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface GroupUpdated {
      /**
       * The ID of the group.
       */
      id?: string;

      /**
       * The payload used to update the group.
       */
      changes_requested?: GroupUpdated.ChangesRequested;
    }

    export namespace GroupUpdated {
      /**
       * The payload used to update the group.
       */
      export interface ChangesRequested {
        /**
         * The updated group name.
         */
        group_name?: string;
      }
    }

    /**
     * The details for events with this `type`.
     */
    export interface InviteAccepted {
      /**
       * The ID of the invite.
       */
      id?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface InviteDeleted {
      /**
       * The ID of the invite.
       */
      id?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface InviteSent {
      /**
       * The ID of the invite.
       */
      id?: string;

      /**
       * The payload used to create the invite.
       */
      data?: InviteSent.Data;
    }

    export namespace InviteSent {
      /**
       * The payload used to create the invite.
       */
      export interface Data {
        /**
         * The email invited to the organization.
         */
        email?: string;

        /**
         * The role the email was invited to be. Is either `owner` or `member`.
         */
        role?: string;
      }
    }

    /**
     * The details for events with this `type`.
     */
    export interface IPAllowlistConfigActivated {
      /**
       * The configurations that were activated.
       */
      configs?: Array<IPAllowlistConfigActivated.Config>;
    }

    export namespace IPAllowlistConfigActivated {
      export interface Config {
        /**
         * The ID of the IP allowlist configuration.
         */
        id?: string;

        /**
         * The name of the IP allowlist configuration.
         */
        name?: string;
      }
    }

    /**
     * The details for events with this `type`.
     */
    export interface IPAllowlistConfigDeactivated {
      /**
       * The configurations that were deactivated.
       */
      configs?: Array<IPAllowlistConfigDeactivated.Config>;
    }

    export namespace IPAllowlistConfigDeactivated {
      export interface Config {
        /**
         * The ID of the IP allowlist configuration.
         */
        id?: string;

        /**
         * The name of the IP allowlist configuration.
         */
        name?: string;
      }
    }

    /**
     * The details for events with this `type`.
     */
    export interface IPAllowlistCreated {
      /**
       * The ID of the IP allowlist configuration.
       */
      id?: string;

      /**
       * The IP addresses or CIDR ranges included in the configuration.
       */
      allowed_ips?: Array<string>;

      /**
       * The name of the IP allowlist configuration.
       */
      name?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface IPAllowlistDeleted {
      /**
       * The ID of the IP allowlist configuration.
       */
      id?: string;

      /**
       * The IP addresses or CIDR ranges that were in the configuration.
       */
      allowed_ips?: Array<string>;

      /**
       * The name of the IP allowlist configuration.
       */
      name?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface IPAllowlistUpdated {
      /**
       * The ID of the IP allowlist configuration.
       */
      id?: string;

      /**
       * The updated set of IP addresses or CIDR ranges in the configuration.
       */
      allowed_ips?: Array<string>;
    }

    /**
     * The details for events with this `type`.
     */
    export interface LoginFailed {
      /**
       * The error code of the failure.
       */
      error_code?: string;

      /**
       * The error message of the failure.
       */
      error_message?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface LogoutFailed {
      /**
       * The error code of the failure.
       */
      error_code?: string;

      /**
       * The error message of the failure.
       */
      error_message?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface OrganizationUpdated {
      /**
       * The organization ID.
       */
      id?: string;

      /**
       * The payload used to update the organization settings.
       */
      changes_requested?: OrganizationUpdated.ChangesRequested;
    }

    export namespace OrganizationUpdated {
      /**
       * The payload used to update the organization settings.
       */
      export interface ChangesRequested {
        /**
         * How your organization logs data from supported API calls. One of `disabled`,
         * `enabled_per_call`, `enabled_for_all_projects`, or
         * `enabled_for_selected_projects`
         */
        api_call_logging?: string;

        /**
         * The list of project ids if api_call_logging is set to
         * `enabled_for_selected_projects`
         */
        api_call_logging_project_ids?: string;

        /**
         * The organization description.
         */
        description?: string;

        /**
         * The organization name.
         */
        name?: string;

        /**
         * Visibility of the threads page which shows messages created with the Assistants
         * API and Playground. One of `ANY_ROLE`, `OWNERS`, or `NONE`.
         */
        threads_ui_visibility?: string;

        /**
         * The organization title.
         */
        title?: string;

        /**
         * Visibility of the usage dashboard which shows activity and costs for your
         * organization. One of `ANY_ROLE` or `OWNERS`.
         */
        usage_dashboard_visibility?: string;
      }
    }

    /**
     * The project that the action was scoped to. Absent for actions not scoped to
     * projects. Note that any admin actions taken via Admin API keys are associated
     * with the default project.
     */
    export interface Project {
      /**
       * The project ID.
       */
      id?: string;

      /**
       * The project title.
       */
      name?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface ProjectArchived {
      /**
       * The project ID.
       */
      id?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface ProjectCreated {
      /**
       * The project ID.
       */
      id?: string;

      /**
       * The payload used to create the project.
       */
      data?: ProjectCreated.Data;
    }

    export namespace ProjectCreated {
      /**
       * The payload used to create the project.
       */
      export interface Data {
        /**
         * The project name.
         */
        name?: string;

        /**
         * The title of the project as seen on the dashboard.
         */
        title?: string;
      }
    }

    /**
     * The details for events with this `type`.
     */
    export interface ProjectDeleted {
      /**
       * The project ID.
       */
      id?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface ProjectUpdated {
      /**
       * The project ID.
       */
      id?: string;

      /**
       * The payload used to update the project.
       */
      changes_requested?: ProjectUpdated.ChangesRequested;
    }

    export namespace ProjectUpdated {
      /**
       * The payload used to update the project.
       */
      export interface ChangesRequested {
        /**
         * The title of the project as seen on the dashboard.
         */
        title?: string;
      }
    }

    /**
     * The details for events with this `type`.
     */
    export interface RateLimitDeleted {
      /**
       * The rate limit ID
       */
      id?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface RateLimitUpdated {
      /**
       * The rate limit ID
       */
      id?: string;

      /**
       * The payload used to update the rate limits.
       */
      changes_requested?: RateLimitUpdated.ChangesRequested;
    }

    export namespace RateLimitUpdated {
      /**
       * The payload used to update the rate limits.
       */
      export interface ChangesRequested {
        /**
         * The maximum batch input tokens per day. Only relevant for certain models.
         */
        batch_1_day_max_input_tokens?: number;

        /**
         * The maximum audio megabytes per minute. Only relevant for certain models.
         */
        max_audio_megabytes_per_1_minute?: number;

        /**
         * The maximum images per minute. Only relevant for certain models.
         */
        max_images_per_1_minute?: number;

        /**
         * The maximum requests per day. Only relevant for certain models.
         */
        max_requests_per_1_day?: number;

        /**
         * The maximum requests per minute.
         */
        max_requests_per_1_minute?: number;

        /**
         * The maximum tokens per minute.
         */
        max_tokens_per_1_minute?: number;
      }
    }

    /**
     * The details for events with this `type`.
     */
    export interface RoleAssignmentCreated {
      /**
       * The identifier of the role assignment.
       */
      id?: string;

      /**
       * The principal (user or group) that received the role.
       */
      principal_id?: string;

      /**
       * The type of principal (user or group) that received the role.
       */
      principal_type?: string;

      /**
       * The resource the role assignment is scoped to.
       */
      resource_id?: string;

      /**
       * The type of resource the role assignment is scoped to.
       */
      resource_type?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface RoleAssignmentDeleted {
      /**
       * The identifier of the role assignment.
       */
      id?: string;

      /**
       * The principal (user or group) that had the role removed.
       */
      principal_id?: string;

      /**
       * The type of principal (user or group) that had the role removed.
       */
      principal_type?: string;

      /**
       * The resource the role assignment was scoped to.
       */
      resource_id?: string;

      /**
       * The type of resource the role assignment was scoped to.
       */
      resource_type?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface RoleCreated {
      /**
       * The role ID.
       */
      id?: string;

      /**
       * The permissions granted by the role.
       */
      permissions?: Array<string>;

      /**
       * The resource the role is scoped to.
       */
      resource_id?: string;

      /**
       * The type of resource the role belongs to.
       */
      resource_type?: string;

      /**
       * The name of the role.
       */
      role_name?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface RoleDeleted {
      /**
       * The role ID.
       */
      id?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface RoleUpdated {
      /**
       * The role ID.
       */
      id?: string;

      /**
       * The payload used to update the role.
       */
      changes_requested?: RoleUpdated.ChangesRequested;
    }

    export namespace RoleUpdated {
      /**
       * The payload used to update the role.
       */
      export interface ChangesRequested {
        /**
         * The updated role description, when provided.
         */
        description?: string;

        /**
         * Additional metadata stored on the role.
         */
        metadata?: unknown;

        /**
         * The permissions added to the role.
         */
        permissions_added?: Array<string>;

        /**
         * The permissions removed from the role.
         */
        permissions_removed?: Array<string>;

        /**
         * The resource the role is scoped to.
         */
        resource_id?: string;

        /**
         * The type of resource the role belongs to.
         */
        resource_type?: string;

        /**
         * The updated role name, when provided.
         */
        role_name?: string;
      }
    }

    /**
     * The details for events with this `type`.
     */
    export interface ScimDisabled {
      /**
       * The ID of the SCIM was disabled for.
       */
      id?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface ScimEnabled {
      /**
       * The ID of the SCIM was enabled for.
       */
      id?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface ServiceAccountCreated {
      /**
       * The service account ID.
       */
      id?: string;

      /**
       * The payload used to create the service account.
       */
      data?: ServiceAccountCreated.Data;
    }

    export namespace ServiceAccountCreated {
      /**
       * The payload used to create the service account.
       */
      export interface Data {
        /**
         * The role of the service account. Is either `owner` or `member`.
         */
        role?: string;
      }
    }

    /**
     * The details for events with this `type`.
     */
    export interface ServiceAccountDeleted {
      /**
       * The service account ID.
       */
      id?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface ServiceAccountUpdated {
      /**
       * The service account ID.
       */
      id?: string;

      /**
       * The payload used to updated the service account.
       */
      changes_requested?: ServiceAccountUpdated.ChangesRequested;
    }

    export namespace ServiceAccountUpdated {
      /**
       * The payload used to updated the service account.
       */
      export interface ChangesRequested {
        /**
         * The role of the service account. Is either `owner` or `member`.
         */
        role?: string;
      }
    }

    /**
     * The details for events with this `type`.
     */
    export interface UserAdded {
      /**
       * The user ID.
       */
      id?: string;

      /**
       * The payload used to add the user to the project.
       */
      data?: UserAdded.Data;
    }

    export namespace UserAdded {
      /**
       * The payload used to add the user to the project.
       */
      export interface Data {
        /**
         * The role of the user. Is either `owner` or `member`.
         */
        role?: string;
      }
    }

    /**
     * The details for events with this `type`.
     */
    export interface UserDeleted {
      /**
       * The user ID.
       */
      id?: string;
    }

    /**
     * The details for events with this `type`.
     */
    export interface UserUpdated {
      /**
       * The project ID.
       */
      id?: string;

      /**
       * The payload used to update the user.
       */
      changes_requested?: UserUpdated.ChangesRequested;
    }

    export namespace UserUpdated {
      /**
       * The payload used to update the user.
       */
      export interface ChangesRequested {
        /**
         * The role of the user. Is either `owner` or `member`.
         */
        role?: string;
      }
    }
  }
}

export interface OrganizationGetCostsParams {
  /**
   * Start time (Unix seconds) of the query time range, inclusive.
   */
  start_time: number;

  /**
   * Width of each time bucket in response. Currently only `1d` is supported, default
   * to `1d`.
   */
  bucket_width?: '1d';

  /**
   * End time (Unix seconds) of the query time range, exclusive.
   */
  end_time?: number;

  /**
   * Group the costs by the specified fields. Support fields include `project_id`,
   * `line_item` and any combination of them.
   */
  group_by?: Array<'project_id' | 'line_item'>;

  /**
   * A limit on the number of buckets to be returned. Limit can range between 1 and
   * 180, and the default is 7.
   */
  limit?: number;

  /**
   * A cursor for use in pagination. Corresponding to the `next_page` field from the
   * previous response.
   */
  page?: string;

  /**
   * Return only costs for these projects.
   */
  project_ids?: Array<string>;
}

export interface OrganizationListAuditLogsParams {
  /**
   * Return only events performed by users with these emails.
   */
  actor_emails?: Array<string>;

  /**
   * Return only events performed by these actors. Can be a user ID, a service
   * account ID, or an api key tracking ID.
   */
  actor_ids?: Array<string>;

  /**
   * A cursor for use in pagination. `after` is an object ID that defines your place
   * in the list. For instance, if you make a list request and receive 100 objects,
   * ending with obj_foo, your subsequent call can include after=obj_foo in order to
   * fetch the next page of the list.
   */
  after?: string;

  /**
   * A cursor for use in pagination. `before` is an object ID that defines your place
   * in the list. For instance, if you make a list request and receive 100 objects,
   * starting with obj_foo, your subsequent call can include before=obj_foo in order
   * to fetch the previous page of the list.
   */
  before?: string;

  /**
   * Return only events whose `effective_at` (Unix seconds) is in this range.
   */
  effective_at?: OrganizationListAuditLogsParams.EffectiveAt;

  /**
   * Return only events with a `type` in one of these values. For example,
   * `project.created`. For all options, see the documentation for the
   * [audit log object](/docs/api-reference/audit-logs/object).
   */
  event_types?: Array<AuditLogEventType>;

  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and
   * 100, and the default is 20.
   */
  limit?: number;

  /**
   * Return only events for these projects.
   */
  project_ids?: Array<string>;

  /**
   * Return only events performed on these targets. For example, a project ID
   * updated.
   */
  resource_ids?: Array<string>;
}

export namespace OrganizationListAuditLogsParams {
  /**
   * Return only events whose `effective_at` (Unix seconds) is in this range.
   */
  export interface EffectiveAt {
    /**
     * Return only events whose `effective_at` (Unix seconds) is greater than this
     * value.
     */
    gt?: number;

    /**
     * Return only events whose `effective_at` (Unix seconds) is greater than or equal
     * to this value.
     */
    gte?: number;

    /**
     * Return only events whose `effective_at` (Unix seconds) is less than this value.
     */
    lt?: number;

    /**
     * Return only events whose `effective_at` (Unix seconds) is less than or equal to
     * this value.
     */
    lte?: number;
  }
}

Organization.AdminAPIKeys = AdminAPIKeys;
Organization.Certificates = Certificates;
Organization.Groups = Groups;
Organization.Invites = Invites;
Organization.Projects = Projects;
Organization.Roles = Roles;
Organization.Usage = Usage;
Organization.Users = Users;

export declare namespace Organization {
  export {
    type AuditLogActorUser as AuditLogActorUser,
    type AuditLogEventType as AuditLogEventType,
    type UsageResponse as UsageResponse,
    type OrganizationListAuditLogsResponse as OrganizationListAuditLogsResponse,
    type OrganizationGetCostsParams as OrganizationGetCostsParams,
    type OrganizationListAuditLogsParams as OrganizationListAuditLogsParams,
  };

  export {
    AdminAPIKeys as AdminAPIKeys,
    type AdminAPIKey as AdminAPIKey,
    type AdminAPIKeyListResponse as AdminAPIKeyListResponse,
    type AdminAPIKeyDeleteResponse as AdminAPIKeyDeleteResponse,
    type AdminAPIKeyCreateParams as AdminAPIKeyCreateParams,
    type AdminAPIKeyListParams as AdminAPIKeyListParams,
  };

  export {
    Certificates as Certificates,
    type CertificatesAPICertificate as Certificate,
    type ListCertificates as ListCertificates,
    type ToggleCertificates as ToggleCertificates,
    type CertificateDeleteResponse as CertificateDeleteResponse,
    type CertificateRetrieveParams as CertificateRetrieveParams,
    type CertificateUpdateParams as CertificateUpdateParams,
    type CertificateListParams as CertificateListParams,
    type CertificateActivateParams as CertificateActivateParams,
    type CertificateDeactivateParams as CertificateDeactivateParams,
    type CertificateUploadParams as CertificateUploadParams,
  };

  export {
    Groups as Groups,
    type GroupResponse as GroupResponse,
    type GroupUpdateResponse as GroupUpdateResponse,
    type GroupListResponse as GroupListResponse,
    type GroupDeleteResponse as GroupDeleteResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
  };

  export {
    Invites as Invites,
    type Invite as Invite,
    type InviteListResponse as InviteListResponse,
    type InviteDeleteResponse as InviteDeleteResponse,
    type InviteCreateParams as InviteCreateParams,
    type InviteListParams as InviteListParams,
  };

  export {
    Projects as Projects,
    type ProjectsAPIProject as Project,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
  };

  export {
    Roles as Roles,
    type CreateRole as CreateRole,
    type DeletedRole as DeletedRole,
    type Role as Role,
    type RoleListAvailable as RoleListAvailable,
    type UpdateRole as UpdateRole,
    type RoleCreateParams as RoleCreateParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleListParams as RoleListParams,
  };

  export {
    Usage as Usage,
    type UsageAudioSpeechesParams as UsageAudioSpeechesParams,
    type UsageAudioTranscriptionsParams as UsageAudioTranscriptionsParams,
    type UsageCodeInterpreterSessionsParams as UsageCodeInterpreterSessionsParams,
    type UsageCompletionsParams as UsageCompletionsParams,
    type UsageEmbeddingsParams as UsageEmbeddingsParams,
    type UsageImagesParams as UsageImagesParams,
    type UsageModerationsParams as UsageModerationsParams,
    type UsageVectorStoresParams as UsageVectorStoresParams,
  };

  export {
    Users as Users,
    type User as User,
    type UserListResponse as UserListResponse,
    type UserDeleteResponse as UserDeleteResponse,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
  };
}
