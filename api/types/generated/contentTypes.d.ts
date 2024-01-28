import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    projects: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::project.project'
    >;
    interests: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToMany',
      'api::interest.interest'
    >;
    idea_cards: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::idea-card.idea-card'
    >;
    point: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::point.point'
    >;
    profile: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::profile.profile'
    >;
    time_capsules: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::time-capsule.time-capsule'
    >;
    discordId: Attribute.String & Attribute.Private;
    googleId: Attribute.String & Attribute.Private;
    discordUsername: Attribute.String;
    userId: Attribute.UID;
    birthday: Attribute.Date & Attribute.Private;
    country: Attribute.String & Attribute.Private;
    zipCode: Attribute.Integer & Attribute.Private;
    hasAcceptedTermsOfService: Attribute.Boolean;
    hasSubscribedEmails: Attribute.Boolean;
    discord_avatar: Attribute.String;
    discord_discriminator: Attribute.String;
    job: Attribute.Enumeration<['developer', 'designer', 'other']> &
      Attribute.DefaultTo<'other'>;
    experience: Attribute.Enumeration<['junior', 'mid-level', 'senior']>;
    schedule: Attribute.JSON;
    completedOnboarding: Attribute.Boolean & Attribute.DefaultTo<false>;
    ownedCards: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::idea-card.idea-card'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiApplicantApplicant extends Schema.CollectionType {
  collectionName: 'applicants';
  info: {
    singularName: 'applicant';
    pluralName: 'applicants';
    displayName: 'Applicant';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    email: Attribute.Email & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    age: Attribute.Integer & Attribute.Required;
    role: Attribute.String & Attribute.Required;
    zip: Attribute.BigInteger & Attribute.Required;
    experience: Attribute.String & Attribute.Required;
    commitment: Attribute.Float & Attribute.Required;
    accepted: Attribute.Boolean & Attribute.Required;
    reason: Attribute.Text & Attribute.Required;
    project: Attribute.Relation<
      'api::applicant.applicant',
      'oneToOne',
      'api::project.project'
    >;
    level: Attribute.Enumeration<['beginner', 'intermediate', 'advanced']> &
      Attribute.Required;
    skills: Attribute.Component<'skills.skills', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::applicant.applicant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::applicant.applicant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCategoryCategory extends Schema.CollectionType {
  collectionName: 'categories';
  info: {
    singularName: 'category';
    pluralName: 'categories';
    displayName: 'Category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Attribute.String;
    interests: Attribute.Relation<
      'api::category.category',
      'manyToMany',
      'api::interest.interest'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCommentComment extends Schema.CollectionType {
  collectionName: 'comments';
  info: {
    singularName: 'comment';
    pluralName: 'comments';
    displayName: 'Comment';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    text: Attribute.String;
    idea_card: Attribute.Relation<
      'api::comment.comment',
      'manyToOne',
      'api::idea-card.idea-card'
    >;
    author: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::comment.comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::comment.comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDlTalCommunityDlTalCommunity extends Schema.CollectionType {
  collectionName: 'dl_tal_communities';
  info: {
    singularName: 'dl-tal-community';
    pluralName: 'dl-tal-communities';
    displayName: 'DLTalCommunity';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    emailID: Attribute.Email;
    skills: Attribute.String;
    roles: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::dl-tal-community.dl-tal-community',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::dl-tal-community.dl-tal-community',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGithubRepoGithubRepo extends Schema.CollectionType {
  collectionName: 'github_repos';
  info: {
    singularName: 'github-repo';
    pluralName: 'github-repos';
    displayName: 'GithubRepo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    url: Attribute.String & Attribute.Required & Attribute.Unique;
    changes: Attribute.Component<'repo-changes.repo-changes', true>;
    contributors: Attribute.Component<
      'github-contributors.github-contributors',
      true
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::github-repo.github-repo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::github-repo.github-repo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGoogleMeetGoogleMeet extends Schema.CollectionType {
  collectionName: 'google_meets';
  info: {
    singularName: 'google-meet';
    pluralName: 'google-meets';
    displayName: 'GoogleMeets';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    meetingCode: Attribute.String;
    conferenceId: Attribute.String;
    calendarEventId: Attribute.String;
    participants: Attribute.Component<
      'meet-participant.meet-participant',
      true
    >;
    project: Attribute.Relation<
      'api::google-meet.google-meet',
      'oneToOne',
      'api::project.project'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::google-meet.google-meet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::google-meet.google-meet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIdeaCardIdeaCard extends Schema.CollectionType {
  collectionName: 'idea_cards';
  info: {
    singularName: 'idea-card';
    pluralName: 'idea-cards';
    displayName: 'IdeaCard';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ideaName: Attribute.String & Attribute.Required & Attribute.Unique;
    tagline: Attribute.String;
    description: Attribute.Text & Attribute.Required;
    targetAudience: Attribute.Text;
    author: Attribute.Relation<
      'api::idea-card.idea-card',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    comments: Attribute.Relation<
      'api::idea-card.idea-card',
      'oneToMany',
      'api::comment.comment'
    >;
    features: Attribute.Text & Attribute.Required;
    experience: Attribute.Text & Attribute.Required;
    extraInfo: Attribute.Text;
    status: Attribute.Enumeration<
      [
        'submitted',
        'applying',
        'approved',
        'archived',
        'workshopping',
        'deleted'
      ]
    > &
      Attribute.DefaultTo<'workshopping'>;
    involveLevel: Attribute.Enumeration<
      ['none', 'minimum', 'medium', 'highly']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'highly'>;
    ideaOwner: Attribute.Relation<
      'api::idea-card.idea-card',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::idea-card.idea-card',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::idea-card.idea-card',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInterestInterest extends Schema.CollectionType {
  collectionName: 'interests';
  info: {
    singularName: 'interest';
    pluralName: 'interests';
    displayName: 'Interest';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    interest: Attribute.String & Attribute.Required & Attribute.Unique;
    users_permissions_users: Attribute.Relation<
      'api::interest.interest',
      'manyToMany',
      'plugin::users-permissions.user'
    >;
    projects: Attribute.Relation<
      'api::interest.interest',
      'manyToMany',
      'api::project.project'
    >;
    categories: Attribute.Relation<
      'api::interest.interest',
      'manyToMany',
      'api::category.category'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::interest.interest',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::interest.interest',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLikeLike extends Schema.CollectionType {
  collectionName: 'likes';
  info: {
    singularName: 'like';
    pluralName: 'likes';
    displayName: 'Like';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    users_permissions_user: Attribute.Relation<
      'api::like.like',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    objectId: Attribute.UID;
    objectType: Attribute.Enumeration<['Comment', 'IdeaCard']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::like.like', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::like.like', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiNewsletterNewsletter extends Schema.CollectionType {
  collectionName: 'newsletters';
  info: {
    singularName: 'newsletter';
    pluralName: 'newsletters';
    displayName: 'newsletter';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    email: Attribute.Email & Attribute.Required & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::newsletter.newsletter',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::newsletter.newsletter',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNotificationNotification extends Schema.CollectionType {
  collectionName: 'notifications';
  info: {
    singularName: 'notification';
    pluralName: 'notifications';
    displayName: 'Notification';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.String;
    Read: Attribute.Boolean;
    TimeCreated: Attribute.DateTime;
    Collection: Attribute.Enumeration<['IdeaCard', 'Comment']>;
    ObjectID: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::notification.notification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::notification.notification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOpportunityOpportunity extends Schema.CollectionType {
  collectionName: 'opportunities';
  info: {
    singularName: 'opportunity';
    pluralName: 'opportunities';
    displayName: 'Opportunity';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    interests: Attribute.Relation<
      'api::opportunity.opportunity',
      'oneToMany',
      'api::interest.interest'
    >;
    level: Attribute.Enumeration<['Beginner', 'Intermediate', 'Advanced']> &
      Attribute.Required;
    commitmentHoursPerWeek: Attribute.Integer & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    expectations: Attribute.Component<'positions.expectations', true> &
      Attribute.Required;
    isHidden: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    projects: Attribute.Relation<
      'api::opportunity.opportunity',
      'manyToMany',
      'api::project.project'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::opportunity.opportunity',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::opportunity.opportunity',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPointPoint extends Schema.CollectionType {
  collectionName: 'points';
  info: {
    singularName: 'point';
    pluralName: 'points';
    displayName: 'point';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    totalPoints: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<0>;
    totalSeasonPoints: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<0>;
    availablePoints: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<0>;
    volunteerHours: Attribute.Float &
      Attribute.Required &
      Attribute.DefaultTo<0>;
    user: Attribute.Relation<
      'api::point.point',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::point.point',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::point.point',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProfileProfile extends Schema.CollectionType {
  collectionName: 'profiles';
  info: {
    singularName: 'profile';
    pluralName: 'profiles';
    displayName: 'profile';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bio: Attribute.Text;
    profilePictureUrl: Attribute.Text;
    socialMediaLinks: Attribute.Component<'links.social-media-links', true>;
    level: Attribute.Integer;
    user: Attribute.Relation<
      'api::profile.profile',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    displayName: Attribute.String;
    profilePicture: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::profile.profile',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::profile.profile',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProjectProject extends Schema.CollectionType {
  collectionName: 'projects';
  info: {
    singularName: 'project';
    pluralName: 'projects';
    displayName: 'Project';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    catchPhase: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    heroImage: Attribute.Media;
    vision: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    commitmentLevel: Attribute.String & Attribute.Required;
    signupFormUrl: Attribute.String & Attribute.Required;
    openPositions: Attribute.Component<'positions.open-positions', true>;
    team: Attribute.Component<'people.people'>;
    user: Attribute.Relation<
      'api::project.project',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    interests: Attribute.Relation<
      'api::project.project',
      'manyToMany',
      'api::interest.interest'
    >;
    calendarId: Attribute.String;
    board: Attribute.Component<'project.project-board'>;
    isListed: Attribute.Boolean & Attribute.Required;
    SubProjects: Attribute.Relation<
      'api::project.project',
      'oneToMany',
      'api::project.project'
    >;
    parentProject: Attribute.Relation<
      'api::project.project',
      'manyToOne',
      'api::project.project'
    >;
    google_meet: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'api::google-meet.google-meet'
    >;
    newMeetingTimes: Attribute.Component<'dates.new-meeting-times', true>;
    opportunities: Attribute.Relation<
      'api::project.project',
      'manyToMany',
      'api::opportunity.opportunity'
    >;
    images: Attribute.Component<'links.images', true>;
    discordWebhookUrl: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSaveIdeaSaveIdea extends Schema.CollectionType {
  collectionName: 'save_ideas';
  info: {
    singularName: 'save-idea';
    pluralName: 'save-ideas';
    displayName: 'Save';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ObjectId: Attribute.UID;
    users_permissions_user: Attribute.Relation<
      'api::save-idea.save-idea',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    ObjectType: Attribute.Enumeration<['IdeaCard']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::save-idea.save-idea',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::save-idea.save-idea',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSendmailSendmail extends Schema.CollectionType {
  collectionName: 'sendmails';
  info: {
    singularName: 'sendmail';
    pluralName: 'sendmails';
    displayName: 'Sendmail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    email: Attribute.Email;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sendmail.sendmail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sendmail.sendmail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTeamMembershipTeamMembership extends Schema.CollectionType {
  collectionName: 'team_memberships';
  info: {
    singularName: 'team-membership';
    pluralName: 'team-memberships';
    displayName: 'TeamMembership';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    user: Attribute.Relation<
      'api::team-membership.team-membership',
      'oneToOne',
      'plugin::users-permissions.user'
    > &
      Attribute.Required;
    joinDate: Attribute.DateTime;
    leaveDate: Attribute.DateTime;
    project: Attribute.Relation<
      'api::team-membership.team-membership',
      'oneToOne',
      'api::project.project'
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::team-membership.team-membership',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::team-membership.team-membership',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTimeCapsuleTimeCapsule extends Schema.CollectionType {
  collectionName: 'time_capsules';
  info: {
    singularName: 'time-capsule';
    pluralName: 'time-capsules';
    displayName: 'TimeCapsule';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    generateDayInformation: Attribute.Text;
    acquiredKnowledge: Attribute.Text;
    sessionRating: Attribute.Text;
    gaveHelp: Attribute.Text;
    volunteerHours: Attribute.Float;
    receivedHelp: Attribute.Text;
    pairUpQuestion: Attribute.Text;
    extraInformation: Attribute.Text;
    user: Attribute.Relation<
      'api::time-capsule.time-capsule',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::time-capsule.time-capsule',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::time-capsule.time-capsule',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::i18n.locale': PluginI18NLocale;
      'api::applicant.applicant': ApiApplicantApplicant;
      'api::category.category': ApiCategoryCategory;
      'api::comment.comment': ApiCommentComment;
      'api::dl-tal-community.dl-tal-community': ApiDlTalCommunityDlTalCommunity;
      'api::github-repo.github-repo': ApiGithubRepoGithubRepo;
      'api::google-meet.google-meet': ApiGoogleMeetGoogleMeet;
      'api::idea-card.idea-card': ApiIdeaCardIdeaCard;
      'api::interest.interest': ApiInterestInterest;
      'api::like.like': ApiLikeLike;
      'api::newsletter.newsletter': ApiNewsletterNewsletter;
      'api::notification.notification': ApiNotificationNotification;
      'api::opportunity.opportunity': ApiOpportunityOpportunity;
      'api::point.point': ApiPointPoint;
      'api::profile.profile': ApiProfileProfile;
      'api::project.project': ApiProjectProject;
      'api::save-idea.save-idea': ApiSaveIdeaSaveIdea;
      'api::sendmail.sendmail': ApiSendmailSendmail;
      'api::team-membership.team-membership': ApiTeamMembershipTeamMembership;
      'api::time-capsule.time-capsule': ApiTimeCapsuleTimeCapsule;
    }
  }
}
