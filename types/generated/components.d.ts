import type { Schema, Attribute } from '@strapi/strapi';

export interface DatesMeetingTimes extends Schema.Component {
  collectionName: 'components_dates_meeting_times';
  info: {
    name: 'meetingTimes';
    icon: 'calendar-alt';
    description: '';
    displayName: 'MeetingTimes';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    dateTime: Attribute.String & Attribute.Required;
  };
}

export interface DatesNewMeetingTimes extends Schema.Component {
  collectionName: 'components_dates_new_meeting_times';
  info: {
    name: 'newMeetingTimes';
    icon: 'calendar';
    description: '';
    displayName: 'NewMeetingTimes';
  };
  attributes: {
    recurringDate: Attribute.Enumeration<
      [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ]
    > &
      Attribute.Required;
    startTime: Attribute.DateTime & Attribute.Required;
    IANA_timeZone: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'eg. America/Los_Angeles'>;
    endTime: Attribute.DateTime & Attribute.Required;
  };
}

export interface GithubContributorsGithubContributors extends Schema.Component {
  collectionName: 'components_github_contributors_github_contributors';
  info: {
    name: 'GithubContributors';
    icon: 'address-book';
    displayName: 'GithubContributors';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    githubURL: Attribute.String;
    avatarURL: Attribute.String;
    contributions: Attribute.Integer;
  };
}

export interface KeywordsKeywords extends Schema.Component {
  collectionName: 'components_keywords_keywords';
  info: {
    name: 'keywords';
    icon: 'network-wired';
    displayName: 'Keywords';
    description: '';
  };
  attributes: {
    keyword: Attribute.String & Attribute.Required;
  };
}

export interface LinksImages extends Schema.Component {
  collectionName: 'components_links_images';
  info: {
    name: 'Images';
    icon: 'camera-retro';
    displayName: 'Images';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface LinksMeetingLinkUrLs extends Schema.Component {
  collectionName: 'components_links_meeting_link_ur_ls';
  info: {
    name: 'meetingLinkURLs';
    icon: 'comment-dots';
    displayName: 'MeetingLinkURLs';
    description: '';
  };
  attributes: {
    roomName: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface LinksProjectReferenceUrLs extends Schema.Component {
  collectionName: 'components_links_project_reference_ur_ls';
  info: {
    name: 'projectReferenceURLs';
    icon: 'project-diagram';
    displayName: 'ProjectReferenceURLs';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface LinksSocialMediaLinks extends Schema.Component {
  collectionName: 'components_links_social_media_links';
  info: {
    name: 'socialMediaLinks';
    icon: 'ad';
    displayName: 'SocialMediaLinks';
    description: '';
  };
  attributes: {
    socialMediaLink: Attribute.String;
  };
}

export interface MeetParticipantMeetParticipant extends Schema.Component {
  collectionName: 'MeetParticipant';
  info: {
    name: 'MeetParticipant';
    icon: 'chalkboard-teacher';
    displayName: 'MeetParticipant';
    description: '';
  };
  attributes: {
    email: Attribute.String;
    totalMinutes: Attribute.Integer;
  };
}

export interface PeopleLeader extends Schema.Component {
  collectionName: 'components_members_leaders';
  info: {
    name: 'leaders';
    icon: 'child';
    description: '';
    displayName: 'Leaders';
  };
  attributes: {
    leader: Attribute.Relation<
      'people.leader',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    role: Attribute.String & Attribute.Required;
  };
}

export interface PeopleMembers extends Schema.Component {
  collectionName: 'components_people_members';
  info: {
    name: 'members';
    icon: 'address-card';
    description: '';
    displayName: 'Members';
  };
  attributes: {
    member: Attribute.Relation<
      'people.members',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    role: Attribute.String & Attribute.Required;
  };
}

export interface PeoplePeople extends Schema.Component {
  collectionName: 'components_people_people';
  info: {
    name: 'people';
    icon: 'people-carry';
    description: '';
    displayName: 'People';
  };
  attributes: {
    leaders: Attribute.Component<'people.leader', true>;
    members: Attribute.Component<'people.members', true>;
  };
}

export interface PositionsExpectations extends Schema.Component {
  collectionName: 'components_positions_expectations';
  info: {
    displayName: 'expectations';
  };
  attributes: {
    expectation: Attribute.String & Attribute.Required;
  };
}

export interface PositionsOpenPositions extends Schema.Component {
  collectionName: 'components_positions_open_positions';
  info: {
    name: 'openPositions';
    icon: 'hands-helping';
    description: '';
    displayName: 'OpenPositions';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    isHidden: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface ProjectProjectBoard extends Schema.Component {
  collectionName: 'components_project_project_board';
  info: {
    name: 'ProjectBoard';
    icon: 'clipboard';
    description: '';
    displayName: 'ProjectBoard';
  };
  attributes: {
    ProjectMilestone: Attribute.Component<'project.project-milestones', true>;
  };
}

export interface ProjectProjectMilestones extends Schema.Component {
  collectionName: 'components_project_project_milestones';
  info: {
    name: 'Milestone';
    icon: 'clipboard-check';
    description: '';
    displayName: 'Milestone';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    task: Attribute.Component<'project.task', true>;
  };
}

export interface ProjectTask extends Schema.Component {
  collectionName: 'components_project_tasks';
  info: {
    name: 'task';
    icon: 'tasks';
    displayName: 'task';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    isReached: Attribute.Boolean & Attribute.Required;
    completionDate: Attribute.Date;
  };
}

export interface RepoChangesRepoChanges extends Schema.Component {
  collectionName: 'components_repo_changes_repo_changes';
  info: {
    name: 'RepoChanges';
    icon: 'align-justify';
    displayName: 'RepoChanges';
    description: '';
  };
  attributes: {
    datetime: Attribute.DateTime;
    addedLines: Attribute.Integer;
    removedLines: Attribute.Integer;
  };
}

export interface SkillsSkills extends Schema.Component {
  collectionName: 'components_skills_skills';
  info: {
    name: 'skills';
    icon: 'adjust';
    displayName: 'skills';
    description: '';
  };
  attributes: {
    skill: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'dates.meeting-times': DatesMeetingTimes;
      'dates.new-meeting-times': DatesNewMeetingTimes;
      'github-contributors.github-contributors': GithubContributorsGithubContributors;
      'keywords.keywords': KeywordsKeywords;
      'links.images': LinksImages;
      'links.meeting-link-ur-ls': LinksMeetingLinkUrLs;
      'links.project-reference-ur-ls': LinksProjectReferenceUrLs;
      'links.social-media-links': LinksSocialMediaLinks;
      'meet-participant.meet-participant': MeetParticipantMeetParticipant;
      'people.leader': PeopleLeader;
      'people.members': PeopleMembers;
      'people.people': PeoplePeople;
      'positions.expectations': PositionsExpectations;
      'positions.open-positions': PositionsOpenPositions;
      'project.project-board': ProjectProjectBoard;
      'project.project-milestones': ProjectProjectMilestones;
      'project.task': ProjectTask;
      'repo-changes.repo-changes': RepoChangesRepoChanges;
      'skills.skills': SkillsSkills;
    }
  }
}
