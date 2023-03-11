import axios from 'axios';

// Individual collections (import initialization functions, which must be called in our hook!)
import initMockIdeaCardData from "./mockAxios/mockIdeaAxios";

export default function useMockDataInDevelopment() {
    if (process.env.NEXT_PUBLIC_NAME == "DEVELOPMENT")  {
        initMockIdeaCardData();
    }
}