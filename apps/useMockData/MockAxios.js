import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { mockIdeaData } from "./mockCollections/mock-idea-data";
import { mockUserData } from "./mockCollections/mock-user-data";

export default function initMockIdeaCardData() {
    let mock = new AxiosMockAdapter(axios, { delayResponse: 0 });

    mock
        .onGet(`${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards`)
        .reply(() => {
            return [200, mockIdeaData];
        });

    mock
        .onGet(`${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/logout`)
        .reply(() => {
            return [200, {}];
        });

    mock
        .onGet(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`)
        .reply(() => {
            return [200, {}];
        });
}
