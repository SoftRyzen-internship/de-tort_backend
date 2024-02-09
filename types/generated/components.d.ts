import type { Schema, Attribute } from '@strapi/strapi';

export interface AchievementsAchievement extends Schema.Component {
  collectionName: 'components_achievements_achievements';
  info: {
    displayName: 'Achievement';
    icon: 'crown';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 8;
        maxLength: 30;
      }>;
    type: Attribute.Enumeration<['years', 'clients', 'cakes']> &
      Attribute.Required;
  };
}

export interface ImagesImage extends Schema.Component {
  collectionName: 'components_images_images';
  info: {
    displayName: 'Image';
    description: '';
  };
  attributes: {
    photo: Attribute.Media & Attribute.Required;
    image_description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'achievements.achievement': AchievementsAchievement;
      'images.image': ImagesImage;
      'links.link': LinksLink;
    }
  }
}
