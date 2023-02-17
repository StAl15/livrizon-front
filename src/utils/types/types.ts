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
