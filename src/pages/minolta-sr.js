import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/seo';
import DbPageLayout from '../components/DbPageLayout/DbPageLayout';

import LensTable from '../components/LensTable/LensTable';
import { parseLensColumns } from '../utils/utils';

class MinoltaSR extends React.Component {
  constructor(props) {
    super(props);
    this.seoData = this.props.data.allSeoContentJson.edges[0].node.minoltaSrDb;
    this.breadcrumbs = [
      { url: '/', title: 'Aperturepedia' },
      { url: this.props.location.pathname, title: this.seoData.title }
    ];
  }

  // const renderModalContent = (links, icon, title) => {
  //   let toRender = [];
  //     toRender = {
  //       <div className={styles.padded} key={'linkwrapper-' + lensData.id + title}>
  //         <strong className={styles.linkTitle}>
  //           <ApIcon iconType={icon} iconTitle={''} iconSize={'1rem'} /> 
  //           &nbsp;
  //           {title}: 
  //         </strong>
  //         <ul className={styles.ul}>
  //           {links.map(link => (
  //             <li className={styles.source} key={'link-' + lensData.id + link}>
  //               <OutboundLink href={link} target={'_blank'} rel={'noopener noreferrer'}>{link}</OutboundLink>
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     );
  //   }
  //   return toRender;
  // }

  render() {
    return (
      <DbPageLayout
          location={this.props.location}
          modalContent={this.modalContent}
          seoData={this.seoData}>
        <Seo
            title={this.seoData.title}
            description={this.seoData.descr}
            keywords={this.seoData.keywords}
            breadcrumbs={this.breadcrumbs}
            location={this.props.location} />
        <LensTable
            lensData={this.props.data.allMinoltaSrJson}
            lensColumns={parseLensColumns('minolta_sr')}
            mount={'sr'}
            seo={this.seoData} />
      </DbPageLayout>
    );
  }
}

export default MinoltaSR;

export const pageQuery = graphql`
  query {
    allMinoltaSrJson {
      edges {
        node {
          id
          focalLength
          name
          maxAperture
          minAperture
          elements
          groups
          filterThread
          lensHood
          closeFocus
          diameter
          length
          weight
          yearIntroduced
          style
          notes
          sources
          reviews
          lensImgs
          repair
          lensType
          lensCatShort
          lensCatLong
        }
      }
    },
    allSeoContentJson {
      edges {
        node {
          minoltaSrDb {
            name
            title
            descr
            keywords
            variants {
              id
              name
              descr
            }
          }
        }
      }
    }
  }
`
