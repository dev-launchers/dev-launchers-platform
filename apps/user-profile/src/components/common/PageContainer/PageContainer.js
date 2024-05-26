import { useState } from "react";
import { Container } from "./StyledPageContainer"
function PageContainer({ children, style }) {
    return (<Container>{children}</Container>);
}

export default PageContainer;
