const PROJECT_QUERY = (slug: string) => `
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

const PROJECTS_QUERY = `{
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
    }
  }`;

const SEAN_INFO_QUERY = `{
    seanInfo {
      workImage {
        responsiveImage {
          src
        }
      }
    }
  }`;

export { PROJECT_QUERY, PROJECTS_QUERY, SEAN_INFO_QUERY };
