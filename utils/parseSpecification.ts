import type {
    ParsedSpecification,
    SpecItem,
    SpecSection,
    SpecSubGroup,
} from "@/types/product-specification";

// تشخیص خطی که با ایموجی شروع می‌شه (شامل variation selector مثل ️)
const EMOJI_HEADER_REGEX = /^(\p{Extended_Pictographic}\uFE0F?)\s*/u;

export function parseSpecification(raw: string): ParsedSpecification {
    const sections: ParsedSpecification = [];
    if (!raw || typeof raw !== "string") return sections;

    const lines = raw
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l.length > 0);

    let currentSection: SpecSection | null = null;
    let currentSubGroup: SpecSubGroup | null = null;

    for (const line of lines) {
        const emojiMatch = line.match(EMOJI_HEADER_REGEX);

        // حالت ۱: خط عنوان بخش اصلی (با ایموجی شروع می‌شه)
        if (emojiMatch) {
            currentSection = {
                icon: emojiMatch[1],
                title: line.slice(emojiMatch[0].length).trim(),
                subGroups: [],
            };
            sections.push(currentSection);
            currentSubGroup = null; // زیرگروه پیش‌فرض بعداً ساخته می‌شه
            continue;
        }

        if (!currentSection) continue; // خط قبل از هر عنوانی نامعتبره

        // حالت ۲: خط آیتم (با * شروع می‌شه)
        if (line.startsWith("*")) {
            if (!currentSubGroup) {
                currentSubGroup = { items: [] };
                currentSection.subGroups.push(currentSubGroup);
            }
            const content = line.replace(/^\*\s*/, "").trim();
            const colonIndex = content.indexOf(":");

            if (colonIndex !== -1) {
                currentSubGroup.items.push({
                    label: content.slice(0, colonIndex).trim(),
                    value: content.slice(colonIndex + 1).trim(),
                });
            } else {
                currentSubGroup.items.push({ value: content });
            }
            continue;
        }

        // حالت ۳: خط معمولی → عنوان زیرگروه جدید (مثل "Main Camera — Wide")
        currentSubGroup = { title: line, items: [] };
        currentSection.subGroups.push(currentSubGroup);
    }

    return sections;
}

//////////////////

export function getKeyFeatures(
    spec: ParsedSpecification,
    limit: number = 5,
): (SpecItem & { sectionIcon: string; sectionTitle: string })[] {
    const result: (SpecItem & { sectionIcon: string; sectionTitle: string })[] =
        [];

    for (const section of spec) {
        const firstGroupWithItems = section.subGroups.find(
            (g) => g.items.length > 0,
        );
        const firstItem = firstGroupWithItems?.items[0];

        if (firstItem) {
            result.push({
                ...firstItem,
                sectionIcon: section.icon,
                sectionTitle: section.title,
            });
        }

        if (result.length >= limit) break;
    }

    return result.slice(0, limit);
}
