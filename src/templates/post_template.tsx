import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/common/layout';
import MdxBody from '../styles/mdxbody';
import PostHeader from '../components/main/postheader';

type Props = {
  data: any;
};

function PostTemplate({ data }: Props) {
  const {
    mdx: {
      frontmatter: { ...props },
      body,
    },
  } = data;

  return (
    <Layout>
      <PostHeader {...props}></PostHeader>
      <MdxBody>
        <MDXRenderer>{body}</MDXRenderer>
      </MdxBody>
    </Layout>
  );
}

export default PostTemplate;

export const pageQuery = graphql`
  query QueryPost($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        tags
        date(formatString: "YYYY.MM.DD")
      }
    }
  }
`;