type Props = {
  content: string;
};

const BlogBody = ({ content }: Props) => {
  return (
    <div className="Layout" dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default BlogBody;
