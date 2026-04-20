import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const SOURCE_BADGE = {
  external: { label: 'External', color: '#3b82f6' },
  admin: { label: 'Editorial', color: '#e8c547' },
  db: { label: 'Live', color: '#3ddc84' },
};

export default function ArticleCard({ article, featured = false }) {
  const badge = SOURCE_BADGE[article.type];
  const isExternal = article.type === 'external';

  const content = (
    <div style={{ ...styles.card, ...(featured ? styles.featured : {}) }}>
      {/* Image */}
      <div style={{ ...styles.imgWrap, ...(featured ? styles.featuredImg : {}) }}>
        <img
          src={article.image}
          alt={article.title}
          style={styles.img}
          loading="lazy"
          onError={e => { e.target.src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80'; }}
        />
        <span style={{ ...styles.badge, background: badge.color + '22', color: badge.color, borderColor: badge.color + '44' }}>
          {badge.label}
        </span>
        {isExternal && (
          <span style={styles.externalIcon}>↗</span>
        )}
      </div>

      {/* Content */}
      <div style={styles.body}>
        {article.subcategory && (
          <span style={styles.sub}>{article.subcategory.toUpperCase()}</span>
        )}
        <h2 style={{ ...styles.title, ...(featured ? styles.featuredTitle : {}) }}>
          {article.title}
        </h2>
        <p style={styles.summary}>{article.summary}</p>
        <div style={styles.meta}>
          {article.source && <span style={styles.source}>{article.source}</span>}
          <span style={styles.time}>{dayjs(article.publishedAt).fromNow()}</span>
          {article.rating && (
            <span style={styles.rating}>{'★'.repeat(Math.round(article.rating))} {article.rating}/5</span>
          )}
        </div>
      </div>
    </div>
  );

  if (isExternal) {
    return <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>{content}</a>;
  }
  return <Link to={`/article/${article.id}`} style={{ display: 'block' }}>{content}</Link>;
}

const styles = {
  card: {
    background: 'var(--surface)', borderRadius: 'var(--radius)',
    border: '1px solid var(--border)', overflow: 'hidden',
    transition: 'border-color 0.2s, transform 0.2s',
    cursor: 'pointer',
    ':hover': { borderColor: 'var(--accent)', transform: 'translateY(-2px)' }
  },
  featured: { display: 'grid', gridTemplateColumns: '1fr 1fr' },
  imgWrap: { position: 'relative', height: 200, overflow: 'hidden' },
  featuredImg: { height: '100%' },
  img: { width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' },
  badge: {
    position: 'absolute', top: 10, left: 10,
    fontSize: 10, fontWeight: 500, padding: '3px 8px',
    borderRadius: 4, border: '1px solid', letterSpacing: '0.5px',
    backdropFilter: 'blur(8px)'
  },
  externalIcon: {
    position: 'absolute', top: 10, right: 10,
    background: 'rgba(0,0,0,0.6)', color: '#fff',
    width: 24, height: 24, borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 12, backdropFilter: 'blur(4px)'
  },
  body: { padding: '16px' },
  sub: { fontSize: 10, fontWeight: 500, color: 'var(--accent)', letterSpacing: '1px' },
  title: {
    fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700,
    lineHeight: 1.35, margin: '6px 0 8px', color: 'var(--text)'
  },
  featuredTitle: { fontSize: 22 },
  summary: { fontSize: 13, color: 'var(--muted)', lineHeight: 1.5, marginBottom: 12 },
  meta: { display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' },
  source: { fontSize: 11, color: 'var(--accent)', fontWeight: 500 },
  time: { fontSize: 11, color: 'var(--muted)' },
  rating: { fontSize: 11, color: '#f59e0b' }
};
