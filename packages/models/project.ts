import { Opportunity } from "./opportunity";

export interface Formats {
}

export interface ProviderMetadata {
}

export interface HeroImage {
    id: string;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string;
    provider: string;
    provider_metadata: ProviderMetadata;
    related: string;
    created_by: string;
    updated_by: string;
}

export interface Leader2 {
    id: string;
    email: string;
    provider: string;
    password: string;
    resetPasswordToken: string;
    confirmationToken: string;
    confirmed: boolean;
    blocked: boolean;
    role: string;
    username: string;
    projects: string[];
    point: string;
    profile: string;
    discordId: string;
    googleId: string;
    discordAvatar: string;
    discordDiscriminator: string;
    discordUsername: string;
    userId: string;
    time_capsules: string[];
    birthday: string;
    country: string;
    zipCode: number;
    hasAcceptedTermsOfService: boolean;
    hasSubscribedEmails: boolean;
    interests: string[];
    idea_cards: string[];
    created_by: string;
    updated_by: string;
}

export interface Leader {
    id: string;
    leader: Leader2;
    role: string;
}

export interface Member2 {
    id: string;
    email: string;
    provider: string;
    password: string;
    resetPasswordToken: string;
    confirmationToken: string;
    confirmed: boolean;
    blocked: boolean;
    role: string;
    username: string;
    projects: string[];
    point: string;
    profile: string;
    discordId: string;
    googleId: string;
    discordAvatar: string;
    discordDiscriminator: string;
    discordUsername: string;
    userId: string;
    time_capsules: string[];
    birthday: string;
    country: string;
    zipCode: number;
    hasAcceptedTermsOfService: boolean;
    hasSubscribedEmails: boolean;
    interests: string[];
    idea_cards: string[];
    created_by: string;
    updated_by: string;
}

export interface Member {
    id: string;
    member: Member2;
    role: string;
}

export interface Team {
    id: string;
    leaders: Leader[];
    members: Member[];
}

export interface User {
    id: string;
    email: string;
    provider: string;
    password: string;
    resetPasswordToken: string;
    confirmationToken: string;
    confirmed: boolean;
    blocked: boolean;
    role: string;
    username: string;
    projects: string[];
    point: string;
    profile: string;
    discordId: string;
    googleId: string;
    discordAvatar: string;
    discordDiscriminator: string;
    discordUsername: string;
    userId: string;
    time_capsules: string[];
    birthday: string;
    country: string;
    zipCode: number;
    hasAcceptedTermsOfService: boolean;
    hasSubscribedEmails: boolean;
    interests: string[];
    idea_cards: string[];
    created_by: string;
    updated_by: string;
}

export interface Formats2 {
}

export interface ProviderMetadata2 {
}

export interface Image2 {
    id: string;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Formats2;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string;
    provider: string;
    provider_metadata: ProviderMetadata2;
    related: string;
    created_by: string;
    updated_by: string;
}

export interface Image {
    id: string;
    image: Image2[];
}

export interface Interest {
    id: string;
    interest: string;
    users_permissions_users: string[];
    projects: string[];
    categories: string[];
    published_at: string;
    created_by: string;
    updated_by: string;
}

export interface Task {
    id: string;
    title: string;
    isReached: boolean;
    completionDate: string;
}

export interface ProjectMilestone {
    id: string;
    title: string;
    description: string;
    task: Task[];
}

export interface Board {
    id: string;
    ProjectMilestone: ProjectMilestone[];
}

export interface SubProject {
    id: string;
    slug: string;
    catchPhrase: string;
    title: string;
    heroImage: string;
    vision: string;
    description: string;
    commitmentLevel: string;
    signupFormUrl: string;
    team: string;
    user: string;
    Images: string;
    interests: string[];
    calendarId: string;
    board: string;
    isListed: boolean;
    subProjects: string[];
    parentProject: string;
    google_meet: string;
    newMeetingTimes: string;
    opportunities: string[];
    isPlatform: boolean;
    published_at: string;
    created_by: string;
    updated_by: string;
}

export interface ParentProject {
    id: string;
    slug: string;
    catchPhrase: string;
    title: string;
    heroImage: string;
    vision: string;
    description: string;
    commitmentLevel: string;
    signupFormUrl: string;
    team: string;
    user: string;
    Images: string;
    interests: string[];
    calendarId: string;
    board: string;
    isListed: boolean;
    subProjects: string[];
    parentProject: string;
    google_meet: string;
    newMeetingTimes: string;
    opportunities: string[];
    isPlatform: boolean;
    published_at: string;
    created_by: string;
    updated_by: string;
}

export interface GoogleMeet {
    id: string;
    name: string;
    meetingCode: string;
    conferenceId: string;
    calendarEventId: string;
    participants: string;
    project: string;
    created_by: string;
    updated_by: string;
}

export interface NewMeetingTime {
    id: string;
    recurringDate: string;
    startTime: Date;
    IANA_timeZone: string;
    endTime: Date;
}

export interface Project {
    id: string;
    slug: string;
    catchPhrase: string;
    title: string;
    heroImage: HeroImage;
    vision: string;
    description: string;
    commitmentLevel: string;
    signupFormUrl: string;
    team: Team;
    user: User;
    Images: Image[];
    interests: Interest[];
    calendarId: string;
    board: Board;
    isListed: boolean;
    subProjects: SubProject[];
    parentProject: ParentProject;
    google_meet: GoogleMeet;
    newMeetingTimes: NewMeetingTime[];
    opportunities: Opportunity[];
    isPlatform: boolean;
    published_at: string;
}

export interface ProjectLite {
    id: string;
    slug: string;
    catchPhrase: string;
    title: string;
    description: string;
    commitmentLevel: string;
    opportunities: Opportunity[];
    isPlatform: boolean;
}