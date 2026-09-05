"use client";
import style from "./CategorySkeletonStyle.module.css";

interface CategoriesInventorySkeletonProps {
    rowCount?: number;
    rows?: boolean[];
}

export default function CategorySkeleton({
    rowCount = 6,
    rows,
}: CategoriesInventorySkeletonProps) {
    const rowPattern =
        rows ?? Array.from({ length: rowCount }, (_, i) => i % 3 !== 0);

    return (
        <div className={style["cat-skel"]}>
            {/* Header */}
            <div className={style["page-header"]}>
                <div className={style["title-row"]}>
                    <div
                        className={`${style["skel"]} ${style["title-strong"]}`}
                    />
                    <div
                        className={`${style["skel"]} ${style["title-light"]}`}
                    />
                </div>
                <div className={`${style["skel"]} ${style["subtitle"]}`} />
            </div>

            <div className={style["layout"]}>
                {/* Left form panel */}
                <div className={`${style["panel"]} ${style["form-panel"]}`}>
                    <div className={style["add-row"]}>
                        <div
                            className={`${style["skel"]} ${style["add-icon"]}`}
                        />
                        <div
                            className={`${style["skel"]} ${style["add-label"]}`}
                        />
                    </div>

                    <div className={style["divider"]} />

                    <div
                        className={`${style["skel"]} ${style["field-label"]}`}
                    />
                    <div
                        className={`${style["skel"]} ${style["text-input"]}`}
                    />

                    <div
                        className={`${style["skel"]} ${style["field-label"]}`}
                        style={{ marginTop: 28 }}
                    />
                    <div
                        className={`${style["skel"]} ${style["select-input"]}`}
                    />

                    <div className={style["icon-picker-header"]}>
                        <div
                            className={`${style["skel"]} ${style["field-label"]}`}
                            style={{ marginBottom: 0 }}
                        />
                        <div
                            className={`${style["skel"]} ${style["upload-link"]}`}
                        />
                    </div>

                    <div className={style["icon-grid"]}>
                        {Array.from({ length: 18 }).map((_, i) => (
                            <div
                                className={`${style["skel"]} ${style["icon-swatch"]}`}
                                key={i}
                            />
                        ))}
                    </div>

                    <div
                        className={`${style["skel"]} ${style["publish-btn"]}`}
                    />
                </div>

                {/* Right table panel */}
                <div className={`${style["panel"]} ${style["table-panel"]}`}>
                    <div className={style["table-header"]}>
                        <div
                            className={`${style["skel"]} ${style["table-icon"]}`}
                        />
                        <div>
                            <div
                                className={`${style["skel"]} ${style["table-title"]}`}
                            />
                            <div
                                className={`${style["skel"]} ${style["table-subtitle"]}`}
                            />
                        </div>
                    </div>

                    <div className={style["col-headers"]}>
                        <div
                            className={`${style["skel"]} ${style["col-h"]} ${style["col-h-structure"]}`}
                        />
                        <div
                            className={`${style["skel"]} ${style["col-h"]} ${style["col-h-products"]}`}
                        />
                        <div
                            className={`${style["skel"]} ${style["col-h"]} ${style["col-h-actions"]}`}
                        />
                    </div>

                    <div className={style["rows"]}>
                        {rowPattern.map((indented, i) => (
                            <div
                                className={`${style["row"]} ${indented ? style["indented"] : ""}`}
                                key={i}
                            >
                                <div className={style["row-left"]}>
                                    {indented && (
                                        <div
                                            className={`${style["skel"]} ${style["dash"]}`}
                                        />
                                    )}
                                    <div
                                        className={`${style["skel"]} ${style["row-icon"]} ${indented ? style["row-icon-sm"] : ""}`}
                                    />
                                    <div className={style["row-text"]}>
                                        <div
                                            className={`${style["skel"]} ${style["row-name"]}`}
                                            style={{ width: 70 + (i % 3) * 20 }}
                                        />
                                        <div
                                            className={`${style["skel"]} ${style["row-path"]}`}
                                            style={{ width: 60 + (i % 4) * 16 }}
                                        />
                                    </div>
                                </div>
                                <div className={style["row-right"]}>
                                    <div
                                        className={`${style["skel"]} ${style["row-badge"]}`}
                                    />
                                    <div className={style["row-actions"]}>
                                        <div
                                            className={`${style["skel"]} ${style["action-icon"]}`}
                                        />
                                        <div
                                            className={`${style["skel"]} ${style["action-icon"]}`}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
