import type { Schema, Attribute } from '@strapi/strapi';

export interface TextEditorWritePlatform extends Schema.Component {
  collectionName: 'components_text_editor_write_platforms';
  info: {
    displayName: 'WritePlatform';
  };
  attributes: {
    content: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'text-editor.write-platform': TextEditorWritePlatform;
    }
  }
}
