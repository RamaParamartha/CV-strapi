'use strict';

/**
 * project-crud service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::project-crud.project-crud');
