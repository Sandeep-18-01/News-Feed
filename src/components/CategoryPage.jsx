import { useState } from 'react';
import { getArticlesByCategory, CATEGORIES } from '../data/mockData';
import ArticleCard from './ArticleCard';

export default function CategoryPage({ category }) {
  const catConfig = CATEGORIES.find(c => c.id === category) || CATEGORIES[0];
  const [activeSub, setActiveSub] = useState('all');

  const allArticles = getArticlesByCategory(category);
  const filtered = activeSub === 'all'
    ? allArticles
    : allArticles.filter(a => a.subcategory === activeSub);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div style={styles.page} className="fade-up">
      {/* Page Header */}
      <div style={styles.header}>
        <h1 style={styles.heading}>
          {catConfig.icon} {catConfig.label}
        </h1>
        {catConfig.isPrimary && (
          <span style={styles.primaryBadge}>⭐ Revenue Page</span>
        )}
      </div>

      {/* Subcategory filters */}
      {catConfig.subcategories && (
        <div style={styles.filters}>
          <button
            style={{ ...styles.filter, ...(activeSub === 'all' ? styles.filterActive : {}) }}
            onClick={() => setActiveSub('all')}
          >All</button>
          {catConfig.subcategories.map(sub => (
            <button
              key={sub}
              style={{ ...styles.filter, ...(activeSub === sub ? styles.filterActive : {}) }}
              onClick={() => setActiveSub(sub)}
            >
              {sub.charAt(0).toUpperCase() + sub.slice(1)}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <div style={styles.empty}>No articles found in this category yet.</div>
      ) : (
        <>
          {/* Featured Article */}
          {featured && (
            <div style={styles.featuredWrap}>
              <ArticleCard article={featured} featured={true} />
            </div>
          )}

          {/* Grid */}
          <div style={styles.grid}>
            {rest.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  page: { maxWidth: 'var(--max-w)', margin: '0 auto', padding: '32px 20px' },
  header: { display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 },
  heading: {
    fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 900, lineHeight: 1
  },
  primaryBadge: {
    fontSize: 11, background: 'var(--accent)', color: '#0c0c0e',
    padding: '4px 10px', borderRadius: 4, fontWeight: 500
  },
  filters: { display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 },
  filter: {
    padding: '6px 14px', borderRadius: 20, fontSize: 13,
    border: '1px solid var(--border)', color: 'var(--muted)',
    background: 'transparent', transition: 'all 0.2s'
  },
  filterActive: {
    background: 'var(--surface2)', color: 'var(--text)', borderColor: 'var(--text)'
  },
  featuredWrap: { marginBottom: 24 },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: 16
  },
  empty: { color: 'var(--muted)', textAlign: 'center', padding: '60px 0', fontSize: 15 }
};
