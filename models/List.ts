export interface List {
    title: any;
    header?: string;
    description?: string;
}

export interface AuditList {
    title: any,
    header?: any
    children?: AuditList[]
}
