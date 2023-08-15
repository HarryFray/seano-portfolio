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
        responsiveImage {
          base64
          src
        }
      }
      projectRole
      landingBackground {
        responsiveImage {
          base64
          src
        }
      }
      projectImageGallery {
        responsiveImage {
          src
        }
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
        responsiveImage {
          base64
          src
        }
      }
      landingGif {
        responsiveImage {
          base64
          src
        }
      }
      projectImageGallery {
        responsiveImage {
          src
        }
      }
    }
  }`;

const SEAN_INFO_QUERY: string = `{
    seanInfo {
      workImage {
        responsiveImage {
          src
        }
      }
    }
  }`;

export { buildProjectQuery, PROJECTS_QUERY, SEAN_INFO_QUERY };
