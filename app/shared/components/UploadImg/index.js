import React, { useEffect, useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import localeVN from 'antd/es/date-picker/locale/vi_VN';
import { NotificationPopup } from '../NotificationPopup';
import { ERROR } from '../NotificationPopup/constants';
import { StyleImage } from './style';

// Bkav TienNVh: File này custom ô upload avatar
const UploadAvatar = ({ avatar, onChangeUpload, isCrop }) => {
  const { t } = useTranslation();
  const [avatarUrl, setAvatarUrl] = useState(avatar);

  useEffect(() => {
    if (avatar) {
      setAvatarUrl(
        `${
          process.env.NODE_ENV === 'production'
            ? window.SystemConfig.URL
            : process.env.URL
        }/${avatar}`,
      );
    } else {
      setAvatarUrl(null);
    }
  }, [avatar]);

  // Bkav TienNVh lăng nghe sự kiện thay đổi avatar
  const onChange = info => {
    onChangeUpload(info.file.originFileObj);
    if (info.file !== undefined) {
      getBase64(info.file.originFileObj, imageUrl => {
        setAvatarUrl(imageUrl);
      });
    } else {
      setAvatarUrl('');
    }
  };

  // Ham chuyen file anh sang dang base-64
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  return (
    <>
      {!isCrop ? (
        <ImgCrop
          modalOk={t('accountManagement.save')}
          modalTitle={t('accountManagement.editImage')}
          modalCancel={t('accountManagement.cancel')}
          rotate
        >
          <Upload
            locale={localeVN}
            action=""
            listType="picture-card"
            onChange={onChange}
            showUploadList={false}
            accept=".png, .jpg"
            beforeUpload={file => {
              // Kiem tra dieu kien imge truoc khi upload
              const isJpgOrPng =
                file.type === 'image/png' ||
                file.type === 'image/jpeg' ||
                file.type === 'image/jpg';
              if (!isJpgOrPng) {
                NotificationPopup(t('common.invalidTypeAvatar'), ERROR);
              }
              // todo check dung luong chưa chốt
              const isLt2M = file.size / 1024 / 1024 < 2;
              if (!isLt2M) {
                NotificationPopup(t('common.warring_capacity'), ERROR);
              }
              return isJpgOrPng;
            }}
          >
            {avatarUrl !== undefined && avatarUrl != null ? (
              <StyleImage alt="avatar" src={avatarUrl} />
            ) : (
              t('accountManagement.upload')
            )}
          </Upload>
        </ImgCrop>
      ) : (
        <>
          <Upload
            locale={localeVN}
            action=""
            listType="picture-card"
            onChange={onChange}
            showUploadList={false}
            accept=".png, .jpg"
            beforeUpload={file => {
              // Kiem tra dieu kien imge truoc khi upload
              const isJpgOrPng =
                file.type === 'image/png' ||
                file.type === 'image/jpeg' ||
                file.type === 'image/jpg';
              if (!isJpgOrPng) {
                NotificationPopup(t('common.invalidTypeAvatar'), ERROR);
              }
              // todo check dung luong chưa chốt
              const isLt2M = file.size / 1024 / 1024 < 2;
              if (!isLt2M) {
                NotificationPopup(t('common.warring_capacity'), ERROR);
              }
              return isJpgOrPng;
            }}
          >
            {avatarUrl !== undefined && avatarUrl != null ? (
              <StyleImage alt="avatar" src={avatarUrl} />
            ) : (
              t('accountManagement.upload')
            )}
          </Upload>
        </>
      )}
    </>
  );
};
UploadAvatar.propTypes = {
  onChangeUpload: PropTypes.func,
  avatar: PropTypes.string,
  isCrop: PropTypes.func,
};
export default UploadAvatar;
