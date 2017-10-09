// @flow

import axios from 'axios';
import uniq from 'lodash/uniq';
import { reduceById } from '../reduce';
import { mapItemsToObject } from './parse';
import { get as getLang } from '../i18n';

const get = axios.get;

const config = {
  gw2: {
    endpoint: 'https://api.guildwars2.com/',
  },
};

const buildParams = (extra) => ({
  ...extra,
  lang: getLang(),
});

export const readProfessions = (ids: Array<number>) =>
  get(`${config.gw2.endpoint}v2/professions`, {
    params: buildParams({
      ids: ids.join(','),
    }),
  })
  .then(({ data }) => reduceById(data));

export const readTitles = (ids: Array<number>) =>
  get(`${config.gw2.endpoint}v2/titles`, {
    params: buildParams({
      ids: ids.join(','),
    }),
  })
  .then(({ data }) => reduceById(data));

export const readWorlds = (ids: Array<number>) =>
  get(`${config.gw2.endpoint}v2/worlds`, {
    params: buildParams({
      ids: ids.join(','),
    }),
  })
  .then(({ data }) => reduceById(data));

export const readGuildUpgrades = (ids: Array<number>) =>
  get(`${config.gw2.endpoint}v2/guild/upgrades`, {
    params: buildParams({
      ids: ids.join(','),
    }),
  })
  .then(({ data }) => reduceById(data));

export const readLegends = (ids: Array<number>) =>
  get(`${config.gw2.endpoint}v2/legends`, {
    params: buildParams({
      ids: ids.join(','),
    }),
  })
  .then(({ data }) => reduceById(data));

export const readAchievements = (ids: Array<number>) =>
  get(`${config.gw2.endpoint}v2/achievements`, {
    params: buildParams({
      ids: ids.join(','),
    }),
  })
  .then(({ data }) => reduceById(data));

export const readAchievementGroups = (ids: Array<number> | 'all') =>
  get(`${config.gw2.endpoint}v2/achievements/groups`, {
    params: buildParams({
      ids: ids === 'all' ? ids : ids.join(','),
    }),
  })
  .then(({ data }) => reduceById(data));

export const readAchievementCategories = (ids: Array<number> | 'all') =>
  get(`${config.gw2.endpoint}v2/achievements/categories`, {
    params: buildParams({
      ids: ids === 'all' ? ids : ids.join(','),
    }),
  })
  .then(({ data }) => reduceById(data.map((category) => ({
    ...category,
    // Remove duplicate achievement ids, current bug.
    // See: https://github.com/arenanet/api-cdi/issues/517
    achievements: uniq(category.achievements),
  }))));

export const readPets = (ids: Array<number>) =>
  get(`${config.gw2.endpoint}v2/pets`, {
    params: buildParams({
      ids: ids.join(','),
    }),
  })
  .then(({ data }) => reduceById(data));

export const readPvpSeasons = (ids: Array<number>) =>
  get(`${config.gw2.endpoint}v2/pvp/seasons`, {
    params: buildParams({
      ids: ids.join(','),
    }),
  })
  .then(({ data }) => reduceById(data));

export const readMaps = (ids: Array<number>) =>
  get(`${config.gw2.endpoint}v2/maps`, {
    params: buildParams({
      ids: ids.join(','),
    }),
  })
  .then(({ data }) => reduceById(data));

export const readAmulets = (ids: Array<number>) =>
  get(`${config.gw2.endpoint}v2/pvp/amulets`, {
    params: buildParams({
      ids: ids.join(','),
    }),
  })
  .then(({ data }) => reduceById(data));

export const readPvpSeasonIds = () =>
  get(`${config.gw2.endpoint}v2/pvp/seasons`, {
    params: buildParams(),
  })
  .then(({ data }) => data);

export const readPvpSeason = (id: number) =>
  get(`${config.gw2.endpoint}v2/pvp/seasons/${id}`, {
    params: buildParams(),
  })
  .then(({ data }) => data);

export const readSkills = (ids: Array<number>) =>
  get(`${config.gw2.endpoint}v2/skills`, {
    params: buildParams({
      ids: ids.join(','),
    }),
  })
  .then(({ data }) => reduceById(data));

export const readAllItemIds = () =>
  get(`${config.gw2.endpoint}v2/items`, {
    params: buildParams(),
  })
  .then(({ data }) => data);

export const readItems = (ids: Array<number>) => {
  return get(`${config.gw2.endpoint}v2/items`, {
    params: buildParams({
      ids: ids.join(','),
    }),
  })
  .then(({ data }) => mapItemsToObject(data));
};

export const readItemStats = (ids: Array<number>) => {
  return get(`${config.gw2.endpoint}v2/itemstats`, {
    params: buildParams({
      ids: ids.join(','),
    }),
  })
  .then(({ data }) => mapItemsToObject(data));
};

export const readSkins = (ids: Array<number>) => {
  return get(`${config.gw2.endpoint}v2/skins`, {
    params: buildParams({
      ids: ids.join(','),
    }),
  })
  .then(({ data }) => reduceById(data));
};

export const readSpecializations = (ids: Array<number>) => {
  return get(`${config.gw2.endpoint}v2/specializations`, {
    params: buildParams({
      ids: ids.join(','),
    }),
  })
  .then(({ data }) => reduceById(data));
};

export const readCurrencies = (ids: Array<number>) => {
  return get(`${config.gw2.endpoint}v2/currencies`, {
    params: buildParams({
      ids: ids.join(','),
    }),
  })
  .then(({ data }) => reduceById(data));
};

export const createFetch = (resource: string) => (ids: Array<number>) => {
  return get(`${config.gw2.endpoint}v2/${resource}`, {
    params: buildParams({
      ids: ids.join(','),
    }),
  })
  .then(({ data }) => reduceById(data));
};

export const readTraits = (ids: Array<number>) => {
  return get(`${config.gw2.endpoint}v2/traits`, {
    params: buildParams({
      ids: ids.join(','),
    }),
  })
  .then(({ data }) => reduceById(data));
};

export const readGuild = (guid: string) =>
  get(`${config.gw2.endpoint}v1/guild_details.json?guild_id=${guid}`, {
    params: buildParams(),
  })
  .then(({ data }) => data);


type StatDef = {
  id: number,
  itemId: number,
  type: string,
  rarity: string,
  level: number,
};

export const readCalculatedItemStats = (statDefs: Array<StatDef>) =>
  axios.post('https://api.gw2armory.com/itemstats', statDefs, {
    params: buildParams(),
  })
  .then(({ data }) => data.reduce((obj, itemStat, index) => {
    const itemId = statDefs[index].itemId;
    // eslint-disable-next-line no-param-reassign
    obj[`${itemId}${itemStat.id}`] = {
      ...itemStat,
      itemId: statDefs[index].itemId,
    };
    return obj;
  }, {}));
