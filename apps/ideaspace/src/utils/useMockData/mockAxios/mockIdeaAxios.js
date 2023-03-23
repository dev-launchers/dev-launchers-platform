import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { mockIdeaData } from "../mockData/mockIdeaData";

export default function initMockIdeaCardData() {
    let mock = new AxiosMockAdapter(axios, { delayResponse: 0 });

    mock
        .onGet(`${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards`)
        .reply(() => {
            return [200, mockIdeaData];
        });

    mock
        .onGet(/\/idea-cards\/\d+/)
        .reply(function (config) {
            // the actual id can be grabbed from config.url
            const totalUrl = config.url;
            const cardId = totalUrl.substring(totalUrl.lastIndexOf('/')+1);
            const result = mockIdeaData.filter((item) => item.id == cardId);
            return [200, result[0]];
          });

    mock
        .onPut(/\/idea-cards\/\d+/).replyOnce(500)
        .onPut(/\/idea-cards\/\d+/).reply(200);

    mock
        .onPost(`${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards/`).replyOnce(500)
        .onPost(`${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards/`).reply(200,{id:203});
          
}
