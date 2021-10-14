export interface List {
    title?: any;
    header?: string;
    description?: string;
    children?: List[];
}

export interface AuditList {
    title: any;
    header?: any;
    children?: AuditList[];
}
