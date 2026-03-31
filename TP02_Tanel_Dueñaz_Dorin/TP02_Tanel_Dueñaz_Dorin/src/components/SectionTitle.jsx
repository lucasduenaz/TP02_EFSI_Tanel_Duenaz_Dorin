function SectionTitle({ level = 2, children, className = "" }) {
  const Tag = `h${level}`;
  return <Tag className={className}>{children}</Tag>;
}

export default SectionTitle;
