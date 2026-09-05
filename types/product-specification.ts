export interface SpecItem {
    label?: string; // اگه ":" نداشته باشه، undefined
    value: string;
}

export interface SpecSubGroup {
    title?: string; // مثلا "Main Camera — Wide" (اختیاری)
    items: SpecItem[];
}

export interface SpecSection {
    icon: string; // "📱"
    title: string; // "Design & Build"
    subGroups: SpecSubGroup[];
}

export type ParsedSpecification = SpecSection[];
