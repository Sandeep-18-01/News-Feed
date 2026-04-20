import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { getArticleById, getComments, addComment } from '../data/mockData';
dayjs.extend(relativeTime);

export default function ArticleDetail() {
  const { id } = useParams();
  const article = getArticleById(id);
  const [comments, setComments] = useState(getComments(id));
  const [newComment, setNewComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!article) {
    return (
      <div style={styles.notFound}>
        <h2>Article not found</h2>
        <Link to="/" style={styles.backBtn}>← Back to home</Link>
      </div>
    );
  }

  const handleSubmit = () => {
    const text = newComment.trim();
    if (!text) return;
    setSubmitting(true);
    setTimeout(() => {
      const comment = addComment(id, text);
      setComments(prev => [comment, ...prev]);
      setNewComment('');
      setSubmitting(false);
    }, 400);
  };

  return (
    <div style={styles.page} className="fade-up">
      {/* Back link */}
      <Link to={`/${article.category === 'home' ? '' : article.category}`} style={styles.back}>
        ← Back
      </Link>

      <article style={styles.article}>
        {/* Hero Image */}
        <div style={styles.heroWrap}>
          <img src={article.image} alt={article.title} style={styles.hero} />
          <div style={styles.heroOverlay} />
        </div>

        {/* Meta */}
        <div style={styles.meta}>
          {article.subcategory && (
            <span style={styles.sub}>{article.subcategory.toUpperCase()}</span>
          )}
          {article.rating && (
            <span style={styles.rating}>★ {article.rating} / 5</span>
          )}
        </div>

        {/* Title */}
        <h1 style={styles.title}>{article.title}</h1>

        {/* Author & Date */}
        <div style={styles.byline}>
          {article.author && (
            <span style={styles.author}>{article.author}
              {article.authorRole && <em style={styles.role}> · {article.authorRole}</em>}
            </span>
          )}
          {article.source && <span style={styles.source}>{article.source}</span>}
          <span style={styles.date}>{dayjs(article.publishedAt).format('DD MMM YYYY')}</span>
        </div>

        {/* Body */}
        <div style={styles.body}>
          {article.body
            ? article.body.split('\n\n').map((para, i) => (
                <p key={i} style={styles.para}>{para.replace(/\*\*/g, '')}</p>
              ))
            : <p style={styles.para}>{article.summary}</p>
          }
        </div>

        {/* Tags */}
        {article.tags && (
          <div style={styles.tags}>
            {article.tags.map(tag => (
              <span key={tag} style={styles.tag}>#{tag}</span>
            ))}
          </div>
        )}
      </article>

      {/* Comments Section */}
      <section style={styles.commentsSection}>
        <h3 style={styles.commentsTitle}>
          💬 Discussion <span style={styles.count}>({comments.length})</span>
        </h3>

        {/* Comment Input */}
        <div style={styles.inputWrap}>
          <textarea
            style={styles.textarea}
            placeholder="Share your thoughts… (you'll get a fun random name!)"
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
            rows={3}
          />
          <button
            style={{ ...styles.submitBtn, opacity: submitting ? 0.6 : 1 }}
            onClick={handleSubmit}
            disabled={submitting || !newComment.trim()}
          >
            {submitting ? 'Posting…' : 'Post Comment'}
          </button>
        </div>

        {/* Comment List */}
        <div style={styles.commentList}>
          {comments.length === 0 && (
            <p style={styles.noComments}>Be the first to comment!</p>
          )}
          {comments.map(c => (
            <div key={c.id} style={styles.comment}>
              <div style={styles.commentHeader}>
                <span style={styles.avatar}>{c.user[0]}</span>
                <span style={styles.username}>{c.user}</span>
                <span style={styles.commentTime}>{dayjs(c.createdAt).fromNow()}</span>
              </div>
              <p style={styles.commentText}>{c.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: { maxWidth: 780, margin: '0 auto', padding: '28px 20px 60px' },
  notFound: { textAlign: 'center', padding: '80px 20px', color: 'var(--muted)' },
  back: {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    color: 'var(--muted)', fontSize: 13, marginBottom: 24,
    transition: 'color 0.2s'
  },
  article: { marginBottom: 48 },
  heroWrap: { position: 'relative', borderRadius: 12, overflow: 'hidden', height: 360, marginBottom: 24 },
  hero: { width: '100%', height: '100%', objectFit: 'cover' },
  heroOverlay: {
    position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
    background: 'linear-gradient(to top, #0c0c0e, transparent)'
  },
  meta: { display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 },
  sub: { fontSize: 11, fontWeight: 600, color: 'var(--accent)', letterSpacing: '1px' },
  rating: { fontSize: 13, color: '#f59e0b', fontWeight: 500 },
  title: {
    fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 900,
    lineHeight: 1.2, marginBottom: 20, color: 'var(--text)'
  },
  byline: { display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', marginBottom: 28, paddingBottom: 20, borderBottom: '1px solid var(--border)' },
  author: { fontSize: 14, fontWeight: 500, color: 'var(--text)' },
  role: { color: 'var(--muted)', fontStyle: 'normal', fontWeight: 300 },
  source: { fontSize: 12, color: 'var(--accent)', fontWeight: 500 },
  date: { fontSize: 12, color: 'var(--muted)', marginLeft: 'auto' },
  body: {},
  para: { fontSize: 16, lineHeight: 1.8, color: '#c8c8cc', marginBottom: 20 },
  tags: { display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 28 },
  tag: { fontSize: 11, color: 'var(--muted)', background: 'var(--surface2)', padding: '4px 10px', borderRadius: 20 },
  commentsSection: { borderTop: '1px solid var(--border)', paddingTop: 32 },
  commentsTitle: {
    fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, marginBottom: 20
  },
  count: { color: 'var(--muted)', fontWeight: 300, fontSize: 16 },
  inputWrap: { marginBottom: 28 },
  textarea: {
    width: '100%', background: 'var(--surface)', border: '1px solid var(--border)',
    borderRadius: 'var(--radius)', color: 'var(--text)', fontFamily: 'var(--font-body)',
    fontSize: 14, padding: '12px', resize: 'vertical', outline: 'none',
    transition: 'border-color 0.2s', marginBottom: 10
  },
  submitBtn: {
    background: 'var(--accent)', color: '#0c0c0e', fontWeight: 600,
    fontSize: 13, padding: '10px 24px', borderRadius: 'var(--radius)',
    transition: 'opacity 0.2s', border: 'none', cursor: 'pointer'
  },
  commentList: { display: 'flex', flexDirection: 'column', gap: 16 },
  noComments: { color: 'var(--muted)', fontSize: 14, textAlign: 'center', padding: '20px 0' },
  comment: { background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 16 },
  commentHeader: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 },
  avatar: {
    width: 30, height: 30, background: 'var(--surface2)', borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 13, fontWeight: 600, color: 'var(--accent)', border: '1px solid var(--border)'
  },
  username: { fontSize: 13, fontWeight: 500, color: 'var(--text)' },
  commentTime: { fontSize: 11, color: 'var(--muted)', marginLeft: 'auto' },
  commentText: { fontSize: 14, color: '#b8b8be', lineHeight: 1.6 },
  backBtn: { color: 'var(--accent)', marginTop: 12, display: 'inline-block' }
};
