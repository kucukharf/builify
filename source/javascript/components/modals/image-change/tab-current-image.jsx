import React from 'react';
import TTCheckerBoard from '../../../modules/react-tt-checkerboard';
import TTDOM from '../../../Common/TTDOM';
import Input from '../../shared/input';
import Image from '../../shared/image';
import { TRACK_MODAL_CURENT_IMAGE_INPUT_ID } from '../../../constants';
import { defaultImageUrl } from './config';

export default class CurrentImageTab extends React.Component {
  static propTypes = {
    editTarget: React.PropTypes.any.isRequired
  };

  state = {
    imageUrl: defaultImageUrl,
    imageSize: {
      width: 0,
      height: 0
    }
  };

  componentWillMount () {
    const { editTarget } = this.props;

    if (TTDOM.type.isElement(editTarget)) {
      if (editTarget.tagName === 'IMG') {
        const targetUrl = editTarget.getAttribute('src');

        this.setState({
          ...this.state,
          imageUrl: targetUrl,
          imageSize: {
            width: editTarget.width,
            height: editTarget.height
          }
        });
      } else if (editTarget.tagName === 'DIV') {
        const backgroundImage = editTarget.style.backgroundImage;
        const url = backgroundImage.match(/url\(["|']?([^"']*)["|']?\)/)[1];

        if (url) {
          this.setState({
            ...this.state,
            imageUrl: url
          });
        }
      }
    }
  }

  imageSourceInputEvent () {
    const value = this.getImgSrcValue();

    this.setState({
      ...this.state,
      imageUrl: value
    });
  }

  getImgSrcValue () {
    return this.refs['image-src'].getValue();
  }

  render () {
    const { imageUrl, imageSize } = this.state;

    return (
      <div className='ab-modal__tab'>
        <aside className='ab-modal__tabside sec'>
          <h2>Edit Image Source</h2>
          <Input
            id={TRACK_MODAL_CURENT_IMAGE_INPUT_ID}
            onBlur={::this.imageSourceInputEvent}
            ref='image-src'
            type='text'
            label='Image Source'
            value={imageUrl}
            floating={false} />
        </aside>
        <main className='ab-modal__tabcontent sec'>
          <TTCheckerBoard width={519} height={350} rows={42} columns={52}>
            <Image
              chalk
              className='ab-modal__imgholder'
              src={imageUrl}
              sizeInfo={imageSize} />
          </TTCheckerBoard>
        </main>
      </div>
    );
  }
}