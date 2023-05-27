
import React from "react";
import { withTheme } from "styled-components";

import { ThemeProvider } from "styled-components";
import theme from "@devlaunchers/components/styles/theme";

import Section from "../Section";
import { Wrapper, ButtonsContainer, Button } from "./StyledEditorNotification";
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';

import Alert from '@devlaunchers/components/components/molecules/Alert';

function isUserAProjectLeader(user, project) {
	for (let i=0; i<project.team.leaders.length; i++) {
		let leader = project.team.leaders[i];
		if (leader.id === user.id) return true;
	}
	
	return false;
}

function hasEditingAccess(user, project) {
	return isUserAProjectLeader(user, project);
}

const EditorNotification = ({ project }) => {

  const user = useUserDataContext().userData;

	if (hasEditingAccess(user, project)) {
		return (<></>);
	}

	return (
		<div style={{paddingTop: "1rem"}}>
			<ThemeProvider theme={theme}>
      	<Alert signal="notify">
        	<h3>It looks like you have editing permissions for this page!</h3>
        	<p>
          	Head to the dashboard in Strapi to make changes to the content of this page.
						<br />
						<b>Be sure to check "Remember Me" when signing into the Strapi page or you will run into issues</b>
        	</p>
	
        	<ButtonsContainer>
          	<Button
            	bgColor="#f48700"
            	href={`https://api.devlaunchers.org/admin/plugins/content-manager/collectionType/application::project.project/${project.id}`}
            	target="_blank"
            	rel="noopener noreferrer"
          	>
            	<i className="fas fa-pen"></i> Edit
          	</Button>
        	</ButtonsContainer>
      	</Alert>
			</ThemeProvider>
		</div>
	);
}

export default withTheme(EditorNotification);
