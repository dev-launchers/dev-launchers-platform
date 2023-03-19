'use strict';

/**
 * github-repo service.
 */
const axios = require('axios');
// Cache fetching from Github for 10 minutes
const CACHE_TTL = 10 * 60 * 1000;
const { createCoreService } = require('@strapi/strapi').factories;

class GithubManager {
constructor() {
    this.url = 'https://api.github.com';
    this.defaultHeaders = {
    'Accept': 'application/vnd.github.v3+json',
    };
    this.knownBots = ['fluxcdbot', 'dev-launchers-flux'];
    this.cache = new Map();
}

repoURL(user, repo) {
    return `https://github.com/${user}/${repo}`;
}

async repoCodeFreq(user, repo) {
    const url = new URL(`${this.url}/repos/${user}/${repo}/stats/code_frequency`);
    const fetchFunc = async () => {
    const resp = await axios.get(
        url.toString(),
        this.defaultHeaders,
    );
    const cachedData = this.fetchCache(url);
    if (cachedData) {
        return cachedData;
    }
    const freq = resp.data.map(change => {
        return {
        datetime: new Date(change[0] * 1000),
        addedLines: change[1],
        removedLines: change[2],
        };
    });
    return freq;
    };
    return await this.cacheWrapper(url, fetchFunc);
}

async repoIssues(user, repo) {
    const url = new URL(`${this.url}/repos/${user}/${repo}/issues`);
    const fetchFunc = async () => {
    const resp = await axios.get(
        url.toString(),
        this.defaultHeaders,
    );
    const cachedData = this.fetchCache(url);
    if (cachedData) {
        return cachedData;
    }
    return resp.data;
    };
    return await this.cacheWrapper(url, fetchFunc);
}
async repoContributors(user, repo) {
    const url = new URL(`${this.url}/repos/${user}/${repo}/stats/contributors`);
    const fetchFunc = async () => {
    const resp = await axios.get(
        url.toString(),
        this.defaultHeaders,
    );
    const contributors = resp.data.reduce((filtered, c) => {
        const username = c.author.login;
        if (!this.knownBots.includes(username)) {
        filtered.push({
            name: c.author.login,
            githubURL: c.author.html_url,
            avatarURL: c.author.avatar_url,
            contributions: c.total
        });
        }
        return filtered;
    }, []);
    contributors.sort((c1, c2) => {
        return c2.contributions - c1.contributions;
    });
    return contributors;
    };
    return await this.cacheWrapper(url, fetchFunc);
}


async cacheWrapper(url, f) {
    const key = url.pathname;
    const cachedData = this.fetchCache(key);
    if (cachedData) {
    return cachedData;
    }
    const freshData = await f();
    this.addCache(key, freshData);
    return freshData;
}


fetchCache(key) {
    const data = this.cache.get(key);
    if (data) {
    if (this.hasExpired(data)) {
        this.cache.delete(key);
    } else {
        return data;
    }
    }
}

addCache(key, data) {
    this.cache.set(key, {
    data,
    addedTime: Date.now(),
    });
}

hasExpired(cacheEntry) {
    return cacheEntry.addedTime + CACHE_TTL < Date.now();
}
}

module.exports = createCoreService('api::github-repo.github-repo', {
    githubManager: new GithubManager(),
  });

