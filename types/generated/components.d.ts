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
        maxLength: 120;
      }>;
  };
}

export interface ImagesToppingImage extends Schema.Component {
  collectionName: 'components_images_topping_images';
  info: {
    displayName: 'Topping Image';
    description: '';
  };
  attributes: {
    layers: Attribute.Enumeration<['single', 'double']> &
      Attribute.Required &
      Attribute.DefaultTo<'single'>;
    image: Attribute.Component<'images.image'>;
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

export interface PortionsPortionSize extends Schema.Component {
  collectionName: 'components_portions_portion_sizes';
  info: {
    displayName: 'Portion Size';
    description: '';
  };
  attributes: {
    size: Attribute.String & Attribute.Required;
    label: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u0420\u043E\u0437\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0439:'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'achievements.achievement': AchievementsAchievement;
      'images.image': ImagesImage;
      'images.topping-image': ImagesToppingImage;
      'links.link': LinksLink;
      'portions.portion-size': PortionsPortionSize;
    }
  }
}
