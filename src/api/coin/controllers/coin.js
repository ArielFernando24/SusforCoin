'use strict';

/**
 *  coin controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::coin.coin', ({ strapi }) => ({
  async create(ctx) {
    const response = await super.create(ctx);

    const coin = await strapi.service('api::coin.coin').findOne(response.data.id, { populate: '*' });
    const sanitizedCoin = await this.sanitizeOutput(coin, ctx);

    const user = await strapi.query('plugin::users-permissions.user').findOne({
      select: ['totalCoins'],
      where: { id: sanitizedCoin.user.id },
    });

    console.log(user.totalCoins, sanitizedCoin.value);

    await strapi.query('plugin::users-permissions.user').update({
      where: { id: sanitizedCoin.user.id },
      data: { totalCoins: sanitizedCoin.value + user.totalCoins }
    })

    return response;
  },

  async delete(ctx) {

    const { value, user } = await strapi.db.query('api::coin.coin').findOne({
      select: ['value'],
      where: { id: ctx.request.params.id },
      populate: { user: true },
    });

    await strapi.query('plugin::users-permissions.user').update({
      where: { id: user.id },
      data: { totalCoins: user.totalCoins - value }
    })

    const response = await super.delete(ctx);
    return response;
  }
}));
