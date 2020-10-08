import React from 'react';
import { Typography } from '@material-ui/core';
import styles from  './LinkPageContent.module.scss';

class LinkPageContent extends React.Component {

  renderSection(sectionId, title, descr) {
    let data = this.props.data.edges[0].node[sectionId];
    let toRender = [];
    if (data) {
      toRender.push(
        <div key={`section-${sectionId}`}>
          <Typography variant={'h5'}>{title}</Typography>
          <em>{descr}</em>
          <ul className={styles.ul}>
          {data.map(item => (
            <li key={`source-${item.url}`}>
              <a href={item.url} target={'_blank'} rel={'noopener noreferrer'}>{item.name}</a>
              <em className={styles.helpText}>{item.helpText}</em>
            </li>
            ))}
          </ul>
        </div>
      );
    }
    return toRender;
  }

  render() {
    let data = this.props.data.edges[0].node;
    let title = data.oemName + ' ' + data.mountName;
    return (
      <>
        <div className={styles.pageGrid}>
          <div className={styles.gridSummary}>
            <Typography variant={'h4'}>
              {title} Links
            </Typography>
            <p>
              {data.intro}
              <br/><br/>
              <em>Some of these pages may be broken or in your non-native language. If they're broken, I'd recommend searching for them on the <a href="https://archive.org/web/" target={'_blank'} rel={'noopener noreferrer'}>Internet Archive's Wayback Machine</a>. If you need a web page to be translated, I've found <a href="https://translate.google.com/" target={'_blank'} rel={'noopener noreferrer'}>Google Translate</a> to be a serviceable solution.</em>
              <br/><br/>
              <strong>If you have any links you think should be here, feel free to email them to me.</strong> The contact email address is <strong>this website's name</strong> at <strong>gmail dot com</strong>. <em>(This hint is an effort to minimize spam)</em>
            </p>
          </div>
          <div className={styles.gridImg}>
            <img className={styles.leadImg}
                srcSet={`${this.props.smImg} 500w, ${this.props.mdImg} 950w`}
                sizes="50vw"
                alt={data.imgAlt} />
          </div>
          <div className={styles.gridContent}>
            {this.renderSection('oemHistLinks', `${data.oemName} Manufacturer History:`)}
            {this.renderSection('lensSpecLinks', 'Lens Specifications:') }
            {this.renderSection('mountHistLinks', `${data.mountName}-Mount Lens History:`)}
            {this.renderSection('reviewLinks', 'Lens Reviews:', 'Here\'s some good sites I\'ve found with reviews and lens tests of { title } lenses.')}
            {this.renderSection('repairLinks', 'Lens Repair Guides & Manuals:', 'Note: I\'ve often found YouTube to be a good source of disassembly/repair videos. If in doubt, try searching there for your lens.')}
            {this.renderSection('miscLinks', `Additional ${title} Resources:`, 'Additional pages which didn\'t fit into the above topics.')}
          </div>
        </div>
      </>
    )
  }
}

export default LinkPageContent
