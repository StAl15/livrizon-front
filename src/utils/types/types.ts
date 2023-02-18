export type postDetailType = {
    author: AuthorType;
    date: string;
    text: string;
    images?: string[];

}

export type AuthorType = {
    name: string;
    avatar?: string;
    commonSubs?: number;
    bio?: string;
    isVerified?: boolean;
    subscribed?:boolean;
}

export type KnowledgeType = {
    img: string;
    label: string;
    desc: string;
    link: string;
}
export type MemberType = {
    img: string;
    name: string;
    bio: string;
    role: roleType;
    employee: string;
    link?: string;
}
export enum roleType {
    admin='admin',
    user='user',
    mentor='mentor'
}
export enum modeAcces {
    edit='edit',
    watch='watch',
    create='create'
}

export type KnowledgeDetailType = {
    header: string;
    text:string;
    contacts?: string;
    media?: string[],
    cover?: string
}