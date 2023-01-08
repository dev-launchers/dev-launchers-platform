import axios from 'axios';

// Individual collections (import initialization functions, which must be called in our hook!)
import initMockIdeaCardData from "./mockCollections/idea-cards.js";

export default function useMockDataInDevelopment() {
    if (process.env.NEXT_PUBLIC_NAME == "DEVELOPMENT")  {
        initMockIdeaCardData();
    }
}