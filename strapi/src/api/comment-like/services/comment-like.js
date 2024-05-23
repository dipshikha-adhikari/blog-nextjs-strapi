'use strict';

/**
 * comment-like service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::comment-like.comment-like');
