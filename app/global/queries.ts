const buildProjectQuery = (slug: string): string => `
  query {
    project(filter: { slug: { eq: "${slug}" } }) {
      id
      title
      projectVideo
      prevProject {
        slug
      }
      nextProject {
        slug
      }
      landingGif {
        webp: url(imgixParams: {fm: webp, q: 60})
      }
      projectRole
      landingBackground {
        webp: url(imgixParams: {fm: webp, q: 60})
      }
      projectImageGallery {
        webp: url(imgixParams: {fm: webp, q: 60})
      }
    }
  }
`;

const PROJECTS_QUERY: string = `{
    allProjects {
      id
      title
      slug
      landingBackground {
        webp: url(imgixParams: {fm: webp, q: 60})
      }
      landingGif {
        webp: url(imgixParams: {fm: webp, q: 60})
      }
      projectImageGallery {
        webp: url(imgixParams: {fm: webp, q: 60})
      }
    }
  }`;

const SEAN_INFO_QUERY: string = `{
    seanInfo {
      workImage {
        webp: url(imgixParams: {fm: webp, q: 60})
      }
    }
  }`;

export { buildProjectQuery, PROJECTS_QUERY, SEAN_INFO_QUERY };
