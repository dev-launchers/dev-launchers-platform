export const constructAppPage = (App, Page) => {
    return (props) => (
        <App {...props}>
            <Page {...props} />
        </App>
    );
}

