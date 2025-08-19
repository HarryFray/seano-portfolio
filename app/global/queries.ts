const buildProjectQuery = (slug: string): string => `
  query {
    project(filter: { slug: { eq: "${slug}" } }) {
      id
      title
      isPrivateProject
      projectVideo
      prevProject {
        slug
      }
      nextProject {
        slug
      }
      landingGif {
        webp: url(imgixParams: {fm: webp, q: 80, auto: compress})
      }
      projectRole
      projectDescription
      landingBackground {
        webp: url(imgixParams: {fm: webp, q: 80, auto: compress})
      }
      projectImageGallery {
        webp: url(imgixParams: {fm: webp, q: 80, auto: compress})
      }
      projectVideoGallery {
        webp: url(imgixParams: {fm: webp, q: 80, auto: compress})
        customData
      }
    }
  }
`;

const PROJECTS_QUERY: string = `{
    allProjects {
      id
      title
      isPrivateProject
      slug
      landingBackground {
        webp: url(imgixParams: {fm: webp, q: 80, auto: compress})
      }
      landingGif {
        webp: url(imgixParams: {fm: webp, q: 80, auto: compress})
      }
      projectImageGallery {
        webp: url(imgixParams: {fm: webp, q: 80, auto: compress})
      }
      projectVideoGallery {
        webp: url(imgixParams: {fm: webp, q: 80, auto: compress})
        customData
      }
    }
  }`;

const SEAN_INFO_QUERY: string = `{
    seanInfo {
      workImage {
        webp: url(imgixParams: {fm: webp, q: 80, auto: compress})
      }
      contactPageText
    }
  }`;

export { buildProjectQuery, PROJECTS_QUERY, SEAN_INFO_QUERY };
