import styles from "./LoadingSingleProduct.module.css";

const FEATURE_COUNT = 5;

export default function LoadingSingleProductSkeleton() {
    return (
        <div className={styles.pdSkel}>
            {/* Gallery */}
            <div className={styles.gallery}>
                <div className={`${styles.skel} ${styles.mainImage}`} />

                <div className={styles.thumbRow}>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.skel} ${styles.thumb}`}
                        />
                    ))}
                </div>
            </div>

            {/* Info */}
            <div className={styles.info}>
                {/* Title */}
                <div className={`${styles.skel} ${styles.title}`} />

                {/* Pills */}
                <div className={styles.pillRow}>
                    <div
                        className={`${styles.skel} ${styles.pill} ${styles.pillSm}`}
                    />
                    <div
                        className={`${styles.skel} ${styles.pill} ${styles.pillSm}`}
                    />
                    <div
                        className={`${styles.skel} ${styles.pill} ${styles.pillMd}`}
                    />
                    <div
                        className={`${styles.skel} ${styles.pill} ${styles.pillSm}`}
                    />
                </div>

                {/* Section heading */}
                <div className={`${styles.skel} ${styles.sectionHeading}`} />

                {/* Features */}
                <div className={styles.features}>
                    {Array.from({ length: FEATURE_COUNT }).map((_, index) => (
                        <div className={styles.featureRow} key={index}>
                            <div
                                className={`${styles.skel} ${styles.featureDot}`}
                            />

                            <div
                                className={`${styles.skel} ${styles.featureIcon}`}
                            />

                            <div
                                className={`${styles.skel} ${styles.featureText}`}
                                style={{
                                    width: `${60 + index * 30}px`,
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* View more */}
                <div className={`${styles.skel} ${styles.viewMore}`} />

                {/* Prices */}
                <div className={styles.priceRow}>
                    <div
                        className={`${styles.priceBox} ${styles.priceBoxSpecial}`}
                    >
                        <div className={`${styles.skel} ${styles.saveBadge}`} />

                        <div className={`${styles.skel} ${styles.priceBig}`} />

                        <div
                            className={`${styles.skel} ${styles.priceLabel}`}
                        />
                    </div>

                    <div className={styles.priceBox}>
                        <div className={`${styles.skel} ${styles.priceBig}`} />

                        <div
                            className={`${styles.skel} ${styles.priceLabel}`}
                        />
                    </div>
                </div>

                {/* CTA */}
                <div className={styles.ctaRow}>
                    <div className={`${styles.skel} ${styles.qtyControl}`} />

                    <div className={`${styles.skel} ${styles.buyNow}`} />

                    <div className={`${styles.skel} ${styles.addCart}`} />

                    <div className={`${styles.skel} ${styles.wishlist}`} />
                </div>
            </div>
        </div>
    );
}
