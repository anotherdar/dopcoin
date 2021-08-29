export interface News {
    id:             number;
    date:           string;
    date_gmt:       string;
    guid:           GUID;
    modified:       string;
    modified_gmt:   string;
    slug:           string;
    status:         string;
    type:           string;
    link:           string;
    title:          GUID;
    content:        Content;
    excerpt:        Content;
    author:         number;
    featured_media: number;
    comment_status: string;
    ping_status:    string;
    sticky:         boolean;
    template:       string;
    format:         string;
    meta:           any[];
    categories:     number[];
    tags:           any[];
    _links:         Links;
}

export interface Links {
    self:              About[];
    collection:        About[];
    about:             About[];
    author:            Author[];
    replies:           Author[];
    "version-history": VersionHistory[];
    "wp:attachment":   About[];
    "wp:term":         WpTerm[];
    curies:            Cury[];
}

export interface About {
    href: string;
}

export interface Author {
    embeddable: boolean;
    href:       string;
}

export interface Cury {
    name:      string;
    href:      string;
    templated: boolean;
}

export interface VersionHistory {
    count: number;
    href:  string;
}

export interface WpTerm {
    taxonomy:   string;
    embeddable: boolean;
    href:       string;
}

export interface Content {
    rendered:  string;
    protected: boolean;
}

export interface GUID {
    rendered: string;
}
