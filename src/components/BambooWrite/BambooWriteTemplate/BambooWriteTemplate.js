import React from 'react';
import { FB_APP_ID } from 'config/config.json';
import { FaFacebookF } from 'react-icons/fa';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './BambooWriteTemplate.scss';
import ExampleCard from '../ExampleCard';
import Button from 'components/Common/Button/Button';
import Radio from 'components/Common/Radio';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const cx = classNames.bind(style);

const BambooWriteTemplate = ({
  profileSrc,
  name,
  accessToken,
  contentsObj,
  images,
  imgBase64,
  handleImageCancel,
  isType,
  handleIsType,
  handleImageChange,
  handleFaceBookLogin,
  handlePostRequest
}) => {
  const customStyle = {
    width: '18%',
    height: '40%',
    margin: 'auto 0 auto 3%'
  };

  const radioContents = <span className={cx('radioContents')}>
    실명 <span className={cx('radioContents-contents')}><div className={cx('radioContents-contents-fbWrap')}><FaFacebookF className={cx('radioContents-contents-fbWrap-icon')} /></div>Login With Facebook</span>
  </span>; 

  return (
    <div className={cx('BambooWriteTemplate')}>
      <div className={cx('BambooWriteTemplate-header')}>
        <Radio
          isRadio={isType}
          radioType={'anonymous'}
          color={'bamboo'} name={'bamboo-wrtie'}
          id={'bamboo_radio_1'}
          contents={'익명'}
          customStyle={{ margin: 'auto 3% auto 0' }}
          onChange={event => {
            handleIsType(event);
            if (accessToken) {
              window.FB.logout();
            }}}
        />
        <FacebookLogin
          appId={FB_APP_ID}
          autoLoad={true}
          fields='name, email, picture'
          callback={handleFaceBookLogin}
          render={renderProps => (
            <Radio
              isRadio={isType}
              radioType={'realname'}
              color={'bamboo'}
              name={'bamboo-wrtie'}
              id={'bamboo_radio_2'}
              contents={radioContents}
              customStyle={{ margin: 'auto auto auto 0' }}
              onChange={event => {
                handleIsType(event);
                renderProps.onClick();
              }}
            />
          )}
        />
        <div className={cx('BambooWriteTemplate-header-upload')}>
          <label htmlFor={'image_upload'} className={cx('BambooWriteTemplate-header-upload-label')}>사진 업로드</label>
          <input type={'file'} accept={'image/gif, image/jpeg, image/jpg, image/png'} id={'image_upload'} className={cx('BambooWriteTemplate-header-upload-input')} onChange={handleImageChange} multiple={'multiple'} />
        </div>
        <Button appearance={'secondary'} edgeType={'round'} customStyle={customStyle} handleFunction={handlePostRequest}>대나무 제보하기</Button>
      </div>
      <div className={cx('BambooWriteTemplate-contents')}>
        <ExampleCard profileSrc={profileSrc} name={name} contentsObj={contentsObj} images={images} imgBase64={imgBase64} handleImageCancel={handleImageCancel} />
      </div>
      <div className={cx('BambooWriteTemplate-footer')}>
        <span className={cx('BambooWriteTemplate-footer-title')}>참고</span>
        <span className={cx('BambooWriteTemplate-footer-contents')}>최대 4MB 첨부 가능 (JPEG, JPG, PNG 파일 지원)</span>
      </div>
    </div>
  );
};

BambooWriteTemplate.propTypes = {
  profileSrc: PropTypes.string,
  name: PropTypes.string,
  accessToken: PropTypes.string,
  contentsObj: PropTypes.object,
  images: PropTypes.array,
  imgBase64: PropTypes.array,
  imageContents: PropTypes.string,
  handleIsUpload: PropTypes.func,
  handleImageCancel: PropTypes.func,
  isUpload: PropTypes.bool,
  isType: PropTypes.string,
  handleIsType: PropTypes.func,
  handleImageChange: PropTypes.func,
  handleFaceBookLogin: PropTypes.func,
  handlePostRequest: PropTypes.func
};

export default BambooWriteTemplate;
